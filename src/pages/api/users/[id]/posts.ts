import api from "@/api/api";
import { mapDisplayPosts } from "@/common/utils";
import { RecentPostsAPIResponse } from "@/types/api/responses";
import {
  PostsAPIResponse,
  UserAPIResponse,
} from "@/types/dummy-json/responses";
import type { NextApiRequest, NextApiResponse } from "next";

// TODO deal with user post pagination
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecentPostsAPIResponse>
) {
  const LIMIT = 5;
  const skip = req.query.skip ?? ("0" as string);
  const id = req.query.id as string;

  try {
    const responses = await Promise.all([
      api.get<PostsAPIResponse>(
        `/users/${id}/posts?limit=${LIMIT}&skip=${skip}`
      ),
      api.get<UserAPIResponse>(`/users/${id}`),
    ]);

    const posts = responses[0].data.posts;
    const user = responses[1].data;

    const pagination = {
      total: responses[0].data.total,
      skip: responses[0].data.skip,
      limit: LIMIT,
    };
    res.status(200).json({
      success: true,
      posts: mapDisplayPosts(posts, [user]),
      pagination,
    });
  } catch (error) {
    console.error("Error fetching user posts", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch user posts" });
  }
}

export default handler;

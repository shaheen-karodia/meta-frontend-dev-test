import api from "@/api/api";
import { mapDisplayPosts } from "@/common/utils";
import { RecentPostsAPIResponse } from "@/types/api/responses";
import {
  PostsAPIResponse,
  UsersAPIResponse,
} from "@/types/dummy-json/responses";
import type { NextApiRequest, NextApiResponse } from "next";

// TODO combine results of posts and users into a cleaner response
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecentPostsAPIResponse>
) {
  const LIMIT = 5;
  const skip = req.query.skip ?? ("0" as string);
  try {
    const responses = await Promise.all([
      api.get<PostsAPIResponse>(`/posts?limit=${LIMIT}&skip=${skip}`),
      api.get<UsersAPIResponse>("/users?limit=0"),
    ]);

    const posts = responses[0].data.posts;
    const users = responses[1].data.users;

    const pagination = {
      total: responses[0].data.total,
      skip: responses[0].data.skip,
      limit: LIMIT,
    };

    res.status(200).json({
      success: true,
      posts: mapDisplayPosts(posts, users),
      meta: pagination,
    });
  } catch (error) {
    console.error("Error fetching suggested posts", error);
    res.status(500).json({ error: "Failed to fetch suggested posts" });
  }
}

export default handler;

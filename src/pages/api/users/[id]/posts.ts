import api from "@/api/api";
import { mapDisplayPosts } from "@/common/utils";
import { UserPostsAPIResponse } from "@/types/api/responses";
import {
  PostsAPIResponse,
  UserAPIResponse,
} from "@/types/dummy-json/responses";
import type { NextApiRequest, NextApiResponse } from "next";

//TODO change typing
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserPostsAPIResponse>
) {
  const PAGE_SIZE = 2;

  try {
    const cursor = parseInt(req.query.cursor as string) || 0;
    const id = req.query.id as string;

    const responses = await Promise.all([
      api.get<PostsAPIResponse>(
        `/users/${id}/posts?limit=${PAGE_SIZE}&skip=${cursor}`
      ),
      api.get<UserAPIResponse>(`/users/${id}`),
    ]);

    const { posts, total, skip } = responses[0].data;
    const user = responses[1].data;

    const nextId = cursor + PAGE_SIZE < total ? skip + PAGE_SIZE : null;

    res.status(200).json({
      success: true,
      posts: mapDisplayPosts(posts, [user]),
      pagination: {
        nextId: nextId,
        total: total,
        cursor: skip,
      },
    });
  } catch (error) {
    console.error("Error fetching user posts", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch user posts" });
  }
}

export default handler;

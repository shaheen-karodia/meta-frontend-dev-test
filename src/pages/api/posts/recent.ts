import api from "@/api/api";
import { mapDisplayPosts } from "@/common/utils";
import { RecentPostsAPIResponse } from "@/types/api/responses";
import {
  PostsAPIResponse,
  UsersAPIResponse,
} from "@/types/dummy-json/responses";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<RecentPostsAPIResponse>
) => {
  const PAGE_SIZE = 5;

  try {
    const cursor = parseInt(req.query.cursor as string) || 0;

    const responses = await Promise.all([
      api.get<PostsAPIResponse>(`/posts?limit=${PAGE_SIZE}&skip=${cursor}`),
      api.get<UsersAPIResponse>("/users?limit=0"),
    ]);

    const { posts, total, skip } = responses[0].data;
    const users = responses[1].data.users;

    const nextId = cursor + PAGE_SIZE < total ? skip + PAGE_SIZE : null;

    res.status(200).json({
      success: true,
      posts: mapDisplayPosts(posts, users),
      pagination: {
        nextId: nextId,
        total: total,
        cursor: skip,
      },
    });
  } catch (error) {
    console.error("Error fetching recent posts", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch recent posts" });
  }
};

export default handler;

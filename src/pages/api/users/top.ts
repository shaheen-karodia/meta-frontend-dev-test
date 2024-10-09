import api from "@/api/api";
import { topUsers } from "@/common/utils";
import {
  PostsAPIResponse,
  UsersAPIResponse,
} from "@/types/dummy-json/responses";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const responses = await Promise.all([
      api.get<PostsAPIResponse>("/posts?limit=0"),
      api.get<UsersAPIResponse>("/users?limit=0"),
    ]);

    const posts = responses[0].data.posts;
    const users = responses[1].data.users;

    res.status(200).json(topUsers(posts, users, 4));
  } catch (error) {
    console.error("Error fetching top users", error);
    res.status(500).json({ error: "Failed to fetch top users" });
  }
}

export default handler;

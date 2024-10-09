import api from "@/api/api";
import { PostsAPIResponse, UsersAPIResponse } from "@/types/api";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const responses = await Promise.all([
      api.get<PostsAPIResponse>("/posts?limit=0"),
      api.get<UsersAPIResponse>("/users?limit=0"),
    ]);

    const posts = responses[0].data.posts;
    const users = responses[1].data.users;

    res.status(200).json({ a: posts, b: users });
  } catch (error) {
    console.error("Error fetching suggested users", error);
    res.status(500).json({ error: "Failed to fetch suggested users" });
  }
}

export default handler;

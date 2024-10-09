import api from "@/api/api";
import { userProfile } from "@/common/utils";
import { UserProfileAPIResponse } from "@/types/api/responses";
import {
  PostsAPIResponse,
  UserAPIResponse,
} from "@/types/dummy-json/responses";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserProfileAPIResponse>
) {
  const id = req.query.id as string;
  try {
    const responses = await Promise.all([
      api.get<PostsAPIResponse>("/posts?limit=0"),
      api.get<UserAPIResponse>(`/users/${id}`),
    ]);

    const posts = responses[0].data.posts;
    const user = responses[1].data;

    res.status(200).json({ success: true, user: userProfile(posts, user) });
  } catch (error) {
    console.error("Error fetching user profile", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch user profile" });
  }
}

export default handler;

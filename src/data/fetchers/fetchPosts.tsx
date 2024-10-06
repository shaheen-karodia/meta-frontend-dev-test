import { BASE_URL } from "@/common/constants";
import { PostsAPIResponse } from "@/types/api";
import axios from "axios";

export const fetchPosts = (): Promise<PostsAPIResponse[]> =>
  axios.get(`${BASE_URL}/posts`).then((res) => res.data);

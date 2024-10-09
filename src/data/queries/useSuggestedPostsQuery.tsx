import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils";
import { SuggestedPostsAPIResponse } from "@/types/api/responses";
import axios from "axios";
import { SuggestedPost } from "@/types/api/suggested-post";

export const fetchSuggestedPosts = async (): Promise<SuggestedPost[]> => {
  const response: SuggestedPostsAPIResponse = await axios
    .get(`/api/posts/suggested`)
    .then((res) => res.data);

  if (response.success) {
    return response.posts;
  } else {
    throw new Error(response.error);
  }
};

const useSuggestesPostsQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS_SUGGESTED,
    queryFn: fetchSuggestedPosts,
  });
};

export default useSuggestesPostsQuery;

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils";
import { SuggestedPostsAPIResponse } from "@/types/api/responses";
import axios from "axios";

export const fetchSuggestedPosts = (): Promise<SuggestedPostsAPIResponse> =>
  axios.get(`/api/posts/suggested`).then((res) => res.data);

const useSuggestesPostsQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS_SUGGESTED,
    queryFn: fetchSuggestedPosts,
  });
};

export default useSuggestesPostsQuery;

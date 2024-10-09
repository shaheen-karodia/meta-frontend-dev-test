import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils";
import api from "@/api/api";
import { SuggestedPostsAPIResponse } from "@/types/api";

const usePostsQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS_SUGGESTED,
    queryFn: (): Promise<SuggestedPostsAPIResponse> =>
      api.get(`/posts`).then((res) => res.data),
  });
};

export default usePostsQuery;

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/data/utils";
import { fetchPosts } from "@/data/fetchers";

const usePostsQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: fetchPosts,
  });
};

export default usePostsQuery;

import { RecentPostsAPIResponse } from "@/types/api/responses";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "../utils";

export const fetchRecentPosts = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<Extract<RecentPostsAPIResponse, { success: true }>> => {
  const response: RecentPostsAPIResponse = await axios
    .get(`/api/posts/recent?cursor=${pageParam}`)
    .then((res) => res.data);

  if (response.success) {
    return response;
  } else {
    throw new Error(response.error);
  }
};

const useRecentPostsQuery = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.POSTS, "recent"],
    queryFn: fetchRecentPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pagination.nextId,
  });
};

export default useRecentPostsQuery;

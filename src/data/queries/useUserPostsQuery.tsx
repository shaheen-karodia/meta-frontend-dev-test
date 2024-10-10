import { UserPostsAPIResponse } from "@/types/api/responses";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "../utils";

export const fetchUserPosts = async (
  pageParam: number,
  userId: string
): Promise<Extract<UserPostsAPIResponse, { success: true }>> => {
  //TODO retype
  const response: UserPostsAPIResponse = await axios
    .get(`/api/users/${userId}/posts?cursor=${pageParam}`)
    .then((res) => res.data);

  if (response.success) {
    return response;
  } else {
    throw new Error(response.error);
  }
};

const useUserPostsQuery = (userId: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.USER, userId, QUERY_KEYS.POSTS],
    queryFn: ({ pageParam }) => fetchUserPosts(pageParam, userId),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pagination.nextId,
    enabled: !!userId,
  });
};

export default useUserPostsQuery;

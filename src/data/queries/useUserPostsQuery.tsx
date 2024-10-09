import { DisplayPost } from "@/types/api/display-post";
import { RecentPostsAPIResponse } from "@/types/api/responses";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "../utils";

export const fetchUserPosts = async (
  skip: number,
  userId: string
): Promise<DisplayPost[]> => {
  const response: RecentPostsAPIResponse = await axios
    .get(`/api/users/${userId}/posts`, {
      params: { skip },
    })
    .then((res) => res.data);

  if (response.success) {
    return response.posts;
  } else {
    throw new Error(response.error);
  }
};

const useUserPostsQuery = (page: number, userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER, userId, QUERY_KEYS.POSTS, page],
    queryFn: () => fetchUserPosts(page, userId),
    placeholderData: keepPreviousData,
  });
};

export default useUserPostsQuery;

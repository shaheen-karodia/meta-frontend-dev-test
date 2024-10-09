import { DisplayPost } from "@/types/api/display-post";
import { RecentPostsAPIResponse } from "@/types/api/responses";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "../utils";

export const fetchRecentPosts = async (
  skip: number
): Promise<DisplayPost[]> => {
  const response: RecentPostsAPIResponse = await axios
    .get(`/api/posts/recent`, {
      params: { skip },
    })
    .then((res) => res.data);

  if (response.success) {
    return response.posts;
  } else {
    throw new Error(response.error);
  }
};

const useRecentPostsQuery = (page: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS, "recent", page],
    queryFn: () => fetchRecentPosts(page),
    placeholderData: keepPreviousData,
  });
};

export default useRecentPostsQuery;

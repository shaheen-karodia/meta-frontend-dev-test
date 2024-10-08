import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/data/utils";
import axios from "axios";
import { BASE_URL } from "@/common/constants";
import { PostsAPIResponse } from "@/types/api";

// TODO: posts api is paginated
const usePostsQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: (): Promise<PostsAPIResponse> =>
      axios.get(`${BASE_URL}/posts`).then((res) => res.data),
  });
};

export default usePostsQuery;

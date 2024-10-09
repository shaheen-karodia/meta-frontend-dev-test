import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils";
import { TopUsersAPIResponse } from "@/types/api/responses";
import axios from "axios";
import { TopUser } from "@/types/api/top-user";

export const fetchTopUsers = async (): Promise<TopUser[]> => {
  const response: TopUsersAPIResponse = await axios
    .get(`/api/users/top`)
    .then((res) => res.data);

  if (response.success) {
    return response.users;
  } else {
    throw new Error(response.error);
  }
};

const useTopUsersQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.TOP_USERS,
    queryFn: fetchTopUsers,
  });
};

export default useTopUsersQuery;

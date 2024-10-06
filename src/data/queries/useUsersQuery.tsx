import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/data/utils";
import { fetchUsers } from "@/data/fetchers";

const useUsersQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: fetchUsers,
  });
};

export default useUsersQuery;

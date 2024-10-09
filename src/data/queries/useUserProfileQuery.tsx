import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils";
import { UserProfileAPIResponse } from "@/types/api/responses";
import axios from "axios";
import { UserProfile } from "@/types/api/user-profile";

export const fetchUserProfile = async (id: string): Promise<UserProfile> => {
  const response: UserProfileAPIResponse = await axios
    .get(`/api/users/${id}/profile`)
    .then((res) => res.data);

  if (response.success) {
    return response.user;
  } else {
    throw new Error(response.error);
  }
};

const useUserProfileQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER, id],
    queryFn: () => fetchUserProfile(id as string),
    enabled: !!id,
  });
};

export default useUserProfileQuery;

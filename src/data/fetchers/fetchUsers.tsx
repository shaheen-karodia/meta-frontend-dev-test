import { BASE_URL } from "@/common/constants";
import { UsersAPIResponse } from "@/types/api";
import axios from "axios";

export const fetchUsers = (): Promise<UsersAPIResponse> =>
  axios.get(`${BASE_URL}/users`).then((res) => res.data);

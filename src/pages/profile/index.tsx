import { NextPage } from "next";
import axios from "axios";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/common/constants";
import { PostsAPIResponse, UsersAPIResponse } from "@/types/api";
import { QUERY_KEYS } from "@/data/utils";

/**
 * FETCHERS
 */
const fetchUserPosts = (id: string): Promise<PostsAPIResponse> =>
  axios.get(`${BASE_URL}/users/${id}/posts`).then((res) => res.data);

const fetchUsers = (): Promise<UsersAPIResponse> =>
  axios.get(`${BASE_URL}/users`).then((res) => res.data);

const fetchPosts = (): Promise<PostsAPIResponse[]> =>
  axios.get(`${BASE_URL}/posts`).then((res) => res.data);

const Profile: NextPage = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => Promise.resolve({ json: "json" }),
  });

  const userPostsQuery = useQuery({
    queryKey: QUERY_KEYS.USER_POSTS,
    queryFn: () => fetchUserPosts("1"), // TODO remove hard coding of this value
  });

  const usersQuery = useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: () => fetchUsers(),
  });

  const postsQuery = useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: () => fetchPosts(),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-semibold">
        Profile Page
        {JSON.stringify(data)}
      </h1>

      <p>User Posts</p>
      <pre>{JSON.stringify(userPostsQuery.data)}</pre>

      <p>Users</p>
      <pre>{JSON.stringify(usersQuery.data)}</pre>

      <p>Posts</p>
      <pre>{JSON.stringify(postsQuery.data)}</pre>
    </div>
  );
};

// TODO: fetch user info
// TODO: fetch user posts
// TODO: figure out of to externalise hooks
// TODO: figure out how to extract queryObjects
// TODO: figure out how to extract axios client

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["profile"],
    queryFn: fetchPosts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Profile;

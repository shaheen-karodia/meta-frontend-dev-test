import { NextPage } from "next";
import axios from "axios";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/common/react-query";

//TODO type post
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
};

type UserPostsResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

const fetchUserPosts = (id: string): Promise<UserPostsResponse[]> =>
  axios.get(`https://dummyjson.com/users/${id}/posts`).then((res) => res.data);

const getPosts = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data);
};

const Profile: NextPage = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => Promise.resolve({ json: "json" }),
  });

  const userPostsQuery = useQuery({
    queryKey: [QUERY_KEYS.USER_POSTS],
    queryFn: () => fetchUserPosts("1"), // TODO remove hard coding of this value
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-semibold">
        Profile Page
        {JSON.stringify(data)}
      </h1>

      <p>Recent</p>
      <pre>{JSON.stringify(userPostsQuery.data)}</pre>
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
    queryFn: getPosts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Profile;

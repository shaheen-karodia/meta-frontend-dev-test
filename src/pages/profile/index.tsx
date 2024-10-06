import { NextPage } from "next";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-semibold">
        Profile Page
        {JSON.stringify(data)}
      </h1>
    </div>
  );
};

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

import { NextPage } from "next";
import axios from "axios";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/common/constants";
import { PostsAPIResponse } from "@/types/api";
import { QUERY_KEYS } from "@/data/utils";
import useUsersQuery from "@/data/queries/useUsersQuery";
import usePostsQuery from "@/data/queries/usePostsQuery";
import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import PostCard from "@/components/PostCard";

/**
 * FETCHERS
 */
const fetchUserPosts = (id: string): Promise<PostsAPIResponse> =>
  axios.get(`${BASE_URL}/users/${id}/posts`).then((res) => res.data);

const Profile: NextPage = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => Promise.resolve({ json: "json" }),
  });

  const userPostsQuery = useQuery({
    queryKey: QUERY_KEYS.USER_POSTS,
    queryFn: () => fetchUserPosts("1"), // TODO remove hard coding of this value
  });

  const usersQuery = useUsersQuery();
  const postsQuery = usePostsQuery();

  return (
    <div className="bg-gray-50">
      <TitleBar title="Profile" />
      <Container>
        <Heading size="h2">Recent</Heading>
        <PostCard
          tags={["tag1", "tag2"]}
          body={
            "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen."
          }
          firstName={"Placeholder"}
          lastName={"Placeholder"}
          username={"Placeholder"}
          skeleton
        />
        <PostCard
          tags={["tag1", "tag2"]}
          body={
            "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen."
          }
          firstName={"Placeholder"}
          lastName={"Placeholder"}
          username={"Placeholder"}
        />
        <ProfileCard skeleton />
        <ProfileCard />
      </Container>
    </div>
  );
};

// TODO: fetch user info
// TODO: fetch user posts
// TODO: figure out of to externalise hooks
// TODO: figure out how to extract queryObjects
// TODO: figure out how to extract axios client

export async function getServerSideProps() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["profile"],
  //   queryFn: () => {},
  // });

  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Profile;

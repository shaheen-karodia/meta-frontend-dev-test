import { NextPage } from "next";
import axios from "axios";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/common/constants";
import { PostsAPIResponse } from "@/types/api";
import { QUERY_KEYS } from "@/data/utils";
import useUsersQuery from "@/data/queries/useUserProfileQuery";
import usePostsQuery from "@/data/queries/usePostsQuery";
import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import PostCard from "@/components/PostCard";
import UserCardSmall from "@/components/UserCardSmall";
import ProfileCardSkeleton from "@/components/skeletons/ProfileCardSkeleton";

/**
 * FETCHERS
 */
const fetchUserPosts = (id: string): Promise<PostsAPIResponse> =>
  axios.get(`${BASE_URL}/users/${id}/posts`).then((res) => res.data);

const Profile: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <TitleBar title="Profile" />
      <Container>
        <ProfileCard />
        <ProfileCardSkeleton />
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

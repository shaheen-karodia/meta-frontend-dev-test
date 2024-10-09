import { NextPage } from "next";
import axios from "axios";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/common/constants";
import { PostsAPIResponse } from "@/types/api";

import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import TitleBar from "@/components/TitleBar";
import ProfileCardSkeleton from "@/components/skeletons/ProfileCardSkeleton";
import useUserProfileQuery from "@/data/queries/useUserProfileQuery";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const userProfileQuery = useUserProfileQuery(id as string);

  const skeleton = !userProfileQuery.data;
  return (
    <div className="bg-gray-50">
      <TitleBar title="Profile" />
      <Container>
        {skeleton ? (
          <ProfileCardSkeleton />
        ) : (
          <ProfileCard
            id={userProfileQuery.data.id}
            firstName={userProfileQuery.data.firstName}
            lastName={userProfileQuery.data.lastName}
            username={userProfileQuery.data.username}
            state={userProfileQuery.data.state}
            country={userProfileQuery.data.country}
            department={userProfileQuery.data.department}
            posts={userProfileQuery.data.posts}
            likes={userProfileQuery.data.likes}
          />
        )}
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

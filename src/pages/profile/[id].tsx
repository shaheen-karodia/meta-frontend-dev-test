import { NextPage } from "next";

import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import TitleBar from "@/components/TitleBar";
import ProfileCardSkeleton from "@/components/skeletons/ProfileCardSkeleton";
import useUserProfileQuery from "@/data/queries/useUserProfileQuery";
import { useRouter } from "next/router";
import useUserPostsQuery from "@/data/queries/useUserPostsQuery";
import Heading from "@/components/typography/Heading";
import PostCardSkeleton from "@/components/skeletons/PostCardSkeleton";
import PostCard from "@/components/PostCard";
import { useInView } from "react-intersection-observer";
import React from "react";
import LoadingIndicator from "@/components/LoadingIndicator";
import ErrorCard from "@/components/ErrorCard";

const Profile: NextPage = () => {
  const { ref, inView } = useInView();
  const router = useRouter();
  const { id } = router.query;
  const { data: userProfileData, status: userProfileStatus } =
    useUserProfileQuery(id as string);

  const {
    status: userPostsStatus,
    data: userPostsData,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useUserPostsQuery(id as string);

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const skeleton =
    userProfileStatus === "pending" || userPostsStatus === "pending";
  return (
    <div className="bg-gray-50">
      <TitleBar title="Profile" backHref="/" />
      <Container>
        {skeleton ? (
          <ProfileCardSkeleton />
        ) : userProfileStatus === "error" ? (
          <ErrorCard /> // TODO: Error handling
        ) : (
          <ProfileCard
            id={userProfileData.id}
            firstName={userProfileData.firstName}
            lastName={userProfileData.lastName}
            username={userProfileData.username}
            state={userProfileData.state}
            country={userProfileData.country}
            department={userProfileData.department}
            posts={userProfileData.posts}
            likes={userProfileData.likes}
          />
        )}
        <Heading size="h2" className="mt-12">
          Recent
        </Heading>
        {skeleton ? (
          Array.from({ length: 4 }).map((_, i) => (
            <PostCardSkeleton key={i} className="mt-4" />
          ))
        ) : userPostsStatus === "error" ? (
          <ErrorCard /> // TODO: Error handling
        ) : (
          <>
            {userPostsData.pages.map((page) => (
              <React.Fragment key={page.pagination.cursor}>
                {page.posts.map((post) => (
                  <PostCard
                    userId={post.userId}
                    key={post.id}
                    className="mt-4"
                    tags={post.tags}
                    body={post.body}
                    firstName={post.firstName}
                    lastName={post.lastName}
                    username={post.username}
                    likes={post.likes}
                    dislikes={post.dislikes}
                    views={post.views}
                  />
                ))}
              </React.Fragment>
            ))}

            <LoadingIndicator ref={ref} loading={isFetchingNextPage}>
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load newer"
                : "No more posts"}
            </LoadingIndicator>
          </>
        )}
      </Container>
    </div>
  );
};

export default Profile;

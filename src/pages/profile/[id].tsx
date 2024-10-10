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

// TODO: Potentially own file
// TODO: Skeelton states acrosss the board
const UserPosts = ({ id }: { id: string }) => {
  const { ref, inView } = useInView();
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useUserPostsQuery(id);

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div>
      {status === "pending" ? (
        Array.from({ length: 4 }).map((_, i) => (
          <PostCardSkeleton key={i} className="mt-4" />
        ))
      ) : status === "error" ? (
        <span>Error: {error.message}</span> // TODO: Error handling
      ) : (
        <>
          {data.pages.map((page) => (
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
    </div>
  );
};
const Profile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const userProfileQuery = useUserProfileQuery(id as string);

  const skeleton = !userProfileQuery.data;
  return (
    <div className="bg-gray-50">
      <TitleBar title="Profile" backHref="/" />
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
        <Heading size="h2" className="mt-12">
          Recent
        </Heading>
        <UserPosts id={id as string} />
      </Container>
    </div>
  );
};

export default Profile;

import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import UserCardSmall from "@/components/UserCardSmall";
import { NextPage } from "next";
import useSuggestedPostsQuery from "@/data/queries/useSuggestedPostsQuery";
import useTopUsersQuery from "@/data/queries/useTopUsersQuery";
import { UserCardSkeleton } from "@/components/skeletons/UserCardSkeleton";
import PostCardSkeleton from "@/components/skeletons/PostCardSkeleton";
import useRecentPostsQuery from "@/data/queries/useRecentPostsQuery";
import React from "react";

import { useInView } from "react-intersection-observer";
import LoadingIndicator from "@/components/LoadingIndicator";
import ErrorCard from "@/components/ErrorCard";

const Feed: NextPage = () => {
  const { ref, inView } = useInView();
  const { data: topUserData, status: topUserStatus } = useTopUsersQuery();
  const { data: suggestedPostData, status: suggestedPostStatus } =
    useSuggestedPostsQuery();

  const {
    status: recentPostStatus,
    data: recentPostData,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useRecentPostsQuery();

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const skeleton =
    topUserStatus === "pending" ||
    suggestedPostStatus === "pending" ||
    recentPostStatus === "pending";

  return (
    <div className="bg-gray-50">
      <TitleBar title="Feed" />
      <Container>
        <Heading size="h2">Suggested Posts</Heading>
        {skeleton ? (
          Array.from({ length: 2 }).map((_, i) => (
            <PostCardSkeleton key={i} className="mt-4" />
          ))
        ) : suggestedPostStatus === "error" ? (
          <ErrorCard /> // TODO: Error handling
        ) : (
          suggestedPostData.map((post) => (
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
          ))
        )}

        <Heading size="h2" className="mt-12">
          Who to Follow
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {skeleton ? (
            Array.from({ length: 4 }).map((_, i) => (
              <UserCardSkeleton key={i} />
            ))
          ) : topUserStatus === "error" ? (
            <ErrorCard /> // TODO: Error handling
          ) : (
            topUserData.map((user) => (
              <UserCardSmall
                id={user.id}
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                username={user.username}
              />
            ))
          )}
        </div>

        <Heading size="h2" className="mt-12">
          Recent
        </Heading>
        {skeleton ? (
          Array.from({ length: 4 }).map((_, i) => (
            <PostCardSkeleton key={i} className="mt-4" />
          ))
        ) : recentPostStatus === "error" ? (
          <ErrorCard /> // TODO: Error handling
        ) : (
          <>
            {recentPostData.pages.map((page) => (
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
            {recentPostData && (
              <LoadingIndicator ref={ref} loading={isFetchingNextPage}>
                {isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                  ? "Load newer"
                  : "No more posts"}
              </LoadingIndicator>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Feed;

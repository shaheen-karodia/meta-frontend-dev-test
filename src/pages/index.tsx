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
import React, { useState } from "react";
import { RecentPostsAPIResponse } from "@/types/api/responses";
import { useInView } from "react-intersection-observer";

// TODO: Place in own File

// TODO: Place in own File
const RecentPosts = () => {
  const { ref, inView } = useInView();
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useRecentPostsQuery();

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
          <div>
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load Newer"
                : "Nothing more to load"}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? "Background Updating..."
              : null}
          </div>
        </>
      )}
    </div>
  );
};

const Feed: NextPage = () => {
  const [page, setPage] = useState(0); //TODO get rid off
  const topUserQuery = useTopUsersQuery();
  const suggestedPostsQuery = useSuggestedPostsQuery();
  const recentQuery = useRecentPostsQuery(page); // Todo change

  const skeleton =
    !topUserQuery.data || !suggestedPostsQuery.data || !recentQuery.data;

  return (
    <div className="bg-gray-50">
      <TitleBar title="Feed" />
      <Container>
        <Heading size="h2">Suggested Posts</Heading>
        {skeleton
          ? Array.from({ length: 2 }).map((_, i) => (
              <PostCardSkeleton key={i} className="mt-4" />
            ))
          : suggestedPostsQuery.data.map((post) => (
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

        <Heading size="h2" className="mt-12">
          Who to Follow
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {skeleton
            ? Array.from({ length: 4 }).map((_, i) => (
                <UserCardSkeleton key={i} />
              ))
            : topUserQuery.data.map((user) => (
                <UserCardSmall
                  id={user.id}
                  key={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  username={user.username}
                />
              ))}
        </div>

        <Heading size="h2" className="mt-12">
          Recent
        </Heading>
        <RecentPosts />
      </Container>
    </div>
  );
};

export default Feed;

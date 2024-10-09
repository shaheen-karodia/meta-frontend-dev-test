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
import { useState } from "react";
import { Button } from "@/components/Button";

const Feed: NextPage = () => {
  const [page, setPage] = useState(0);
  const topUserQuery = useTopUsersQuery();
  const suggestedPostsQuery = useSuggestedPostsQuery();
  const recentQuery = useRecentPostsQuery(page);

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
        {skeleton
          ? Array.from({ length: 4 }).map((_, i) => (
              <PostCardSkeleton key={i} className="mt-4" />
            ))
          : recentQuery.data.posts.map((post) => (
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

        {/* TODO: REFACTOR BUTTON TO INFINTE LOADER  */}
        <Button
          intent="outline"
          size="medium"
          className="mt-4 block"
          onClick={() => {
            if (
              !recentQuery.isPlaceholderData &&
              recentQuery.data &&
              recentQuery.data.meta.skip < recentQuery.data?.meta.total
            ) {
              setPage((old) => old + 5);
            }
          }}
          disabled={
            recentQuery.isPlaceholderData ||
            !(
              recentQuery.data &&
              recentQuery.data.meta.skip < recentQuery.data?.meta.total
            )
          }
        >
          Load More {recentQuery.isFetching && "Loading..."}
        </Button>
      </Container>
    </div>
  );
};

export default Feed;

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

const Feed: NextPage = () => {
  const topUserQuery = useTopUsersQuery();
  const suggestedPostsQuery = useSuggestedPostsQuery();
  const recentPostsQuery = useRecentPostsQuery(0);

  const skeleton =
    !topUserQuery.data || !suggestedPostsQuery.data || !recentPostsQuery.data; //TODO not the correct way

  // const { isPending, isError, error, data, isFetching, isPlaceholderData } =

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
          : recentPostsQuery.data.map((post) => (
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
        {/* <button
          onClick={() => {
            if (!isPlaceholderData && recentPostsQuery.data.) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          // disabled={isPlaceholderData || !data?.hasMore}
        >
          Next Page
        </button> */}
      </Container>
    </div>
  );
};

export default Feed;

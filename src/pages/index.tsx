import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import UserCardSmall from "@/components/UserCardSmall";
import { NextPage } from "next";
import ProfileCard from "@/components/ProfileCard";
import usePostsQuery from "@/data/queries/usePostsQuery";
import useSuggestedPostsQuery from "@/data/queries/useSuggestedPostsQuery";
import useTopUsersQuery from "@/data/queries/useTopUsersQuery";

const Feed: NextPage = () => {
  const postsQuery = usePostsQuery();
  const topUserQuery = useTopUsersQuery();
  const suggestedPostsQuery = useSuggestedPostsQuery();

  if (!postsQuery.data) return <div>Loading...</div>;
  if (!topUserQuery.data) return <div>Loading...</div>;
  if (!suggestedPostsQuery.data) return <div>Loading...</div>;

  const TopUsers = topUserQuery.data.map((user) => {
    return (
      <UserCardSmall
        id={user.id}
        key={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        username={user.username}
      />
    );
  });

  const SuggestedPosts = suggestedPostsQuery.data.map((post) => {
    return (
      <PostCard
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
    );
  });

  return (
    <div className="bg-gray-50">
      <TitleBar title="Feed" />
      <Container>
        <Heading size="h2">Suggested Posts</Heading>
        {SuggestedPosts}
        <Heading size="h2" className="mt-12">
          Who to Follow
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {TopUsers}
        </div>

        <Heading size="h2" className="mt-12">
          Recent
        </Heading>
        {/* <PostCard tags={[]} body="" />
        <PostCard tags={[]} body="" />
        <PostCard tags={[]} body="" />
        <PostCard tags={[]} body="" /> */}
      </Container>
    </div>
  );
};

export default Feed;

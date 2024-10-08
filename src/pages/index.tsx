import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import UserCardSmall from "@/components/UserCardSmall";
import { NextPage } from "next";
import ProfileCard from "@/components/ProfileCard";
import usePostsQuery from "@/data/queries/usePostsQuery";
import useUsersQuery from "@/data/queries/useUsersQuery";

const Feed: NextPage = () => {
  const postsQuery = usePostsQuery();
  const usersQuery = useUsersQuery();

  if (!postsQuery.data) return <div>Loading...</div>;
  if (!usersQuery.data) return <div>Loading...</div>;

  const normalizedUsers = Object.fromEntries(
    usersQuery.data.users.map((user) => [user.id, user])
  );

  const SuggestedPosts = [...postsQuery.data.posts]
    .sort((a, b) => b.reactions.likes - a.reactions.likes)
    .slice(0, 2)
    .map((post) => {
      const user = normalizedUsers[post.userId];
      console.log(user);
      return (
        <PostCard
          key={post.id}
          className="mt-4"
          tags={post.tags}
          body={post.body}
          firstName={"Placeholder"}
          lastName={"Placeholder"}
          username={"Placeholder"}
        />
      );
    });

  return (
    <div className="bg-gray-50">
      <TitleBar title="Feed" />
      <Container>
        <Heading size="h2">Suggested Posts</Heading>
        {SuggestedPosts}
        <Heading size="h2">Who to Follow</Heading>
        <UserCardSmall />
        <UserCardSmall />
        <UserCardSmall />
        <Heading size="h2">Recent</Heading>
        {/* <PostCard tags={[]} body="" />
        <PostCard tags={[]} body="" />
        <PostCard tags={[]} body="" />
        <PostCard tags={[]} body="" /> */}
      </Container>
    </div>
  );
};

export default Feed;

import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import UserCardSmall from "@/components/UserCardSmall";
import { NextPage } from "next";

const Feed: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <TitleBar />
      <Container>
        <Heading size="h2">Suggested Posts</Heading>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <Heading size="h2">Who to Follow</Heading>
        <UserCardSmall />
        <UserCardSmall />
        <UserCardSmall />
        <Heading size="h2">Recent</Heading>
      </Container>
    </div>
  );
};

export default Feed;

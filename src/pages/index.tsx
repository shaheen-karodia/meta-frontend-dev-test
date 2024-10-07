import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import UserCardSmall from "@/components/UserCardSmall";
import { NextPage } from "next";
import ProfileCard from "@/components/ProfileCard";

const Feed: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <TitleBar />
      <Container>
        <ProfileCard />
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
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Container>
    </div>
  );
};

export default Feed;

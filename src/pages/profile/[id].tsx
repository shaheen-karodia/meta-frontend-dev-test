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

const Profile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const userProfileQuery = useUserProfileQuery(id as string);
  const userPostsQuery = useUserPostsQuery(0, id as string);

  const skeleton = !userProfileQuery.data || !userPostsQuery.data;
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
        {skeleton
          ? Array.from({ length: 2 }).map((_, i) => (
              <PostCardSkeleton key={i} className="mt-4" />
            ))
          : userPostsQuery.data.map((post) => (
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
        <button />
      </Container>
    </div>
  );
};

export default Profile;

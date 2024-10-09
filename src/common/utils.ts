import { DisplayPost } from "@/types/api/display-post";
import { TopUser } from "@/types/api/top-user";
import { UserProfile } from "@/types/api/user-profile";
import { Post } from "@/types/dummy-json/post";
import { User } from "@/types/dummy-json/user";

export const topUsers = (
  posts: Post[],
  users: User[],
  limit: number
): TopUser[] => {
  const userIdsRankedByPostCount = posts.reduce<Record<string, number>>(
    (acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    },
    {}
  );

  return users
    .sort(
      (a, b) =>
        (userIdsRankedByPostCount[b.id] || 0) -
        (userIdsRankedByPostCount[a.id] || 0)
    )
    .slice(0, limit)
    .map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    }));
};

export const topPosts = (
  posts: Post[],
  users: User[],
  limit: number
): DisplayPost[] => {
  const normalizedUsers = Object.fromEntries(
    users.map((user) => [user.id, user])
  );

  return posts
    .sort((a, b) => b.reactions.likes - a.reactions.likes)
    .slice(0, limit)
    .map((post) => ({
      id: post.id,
      firstName: normalizedUsers[post.userId].firstName,
      lastName: normalizedUsers[post.userId].lastName,
      username: normalizedUsers[post.userId].username,
      body: post.body,
      userId: post.userId,
      tags: post.tags,
      views: post.views,
      likes: post.reactions.likes,
      dislikes: post.reactions.dislikes,
    }));
};

export const userProfile = (posts: Post[], user: User): UserProfile => {
  let postCount = 0;
  let totalLikes = 0;

  for (const post of posts) {
    if (post.userId === user.id) {
      postCount += 1;
      totalLikes += post.reactions.likes;
    }
  }

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    state: user.address.state,
    country: user.address.country,
    department: user.company.department,
    posts: postCount,
    likes: totalLikes,
  };
};

export const mapDisplayPosts = (
  posts: Post[],
  users: User[]
): DisplayPost[] => {
  const normalizedUsers = Object.fromEntries(
    users.map((user) => [user.id, user])
  );

  return posts
    .sort((a, b) => b.reactions.likes - a.reactions.likes)
    .map((post) => {
      const res: DisplayPost = {
        id: post.id,
        firstName: normalizedUsers[post.userId].firstName,
        lastName: normalizedUsers[post.userId].lastName,
        username: normalizedUsers[post.userId].username,
        body: post.body,
        userId: post.userId,
        tags: post.tags,
        views: post.views,
        likes: post.reactions.likes,
        dislikes: post.reactions.dislikes,
      };
      return res;
    });
};

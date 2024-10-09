import { SuggestedPost } from "@/types/api/suggested-post";
import { Post } from "@/types/dummy-json/post";
import { User } from "@/types/dummy-json/user";

export const topUsers = (
  posts: Post[],
  users: User[],
  limit: number
): User[] => {
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
    .slice(0, limit);
};

export const topPosts = (
  posts: Post[],
  users: User[],
  limit: number
): SuggestedPost[] => {
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

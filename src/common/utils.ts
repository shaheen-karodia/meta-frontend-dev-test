import { Post } from "@/types/post";
import { User } from "@/types/user";

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

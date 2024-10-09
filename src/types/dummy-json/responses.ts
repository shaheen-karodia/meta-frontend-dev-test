import { Post } from "./post";
import { User } from "./user";

type PaginatedAPI = {
  total: number;
  skip: number;
  limit: number;
};

export type PostsAPIResponse = PaginatedAPI & {
  posts: Post[];
};

export type UsersAPIResponse = PaginatedAPI & {
  users: User[];
};

export type SuggestedPostsAPIResponse = PaginatedAPI & {
  posts: Post[];
};

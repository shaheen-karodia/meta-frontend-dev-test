import { PaginatedAPI } from "../utils";
import { Post } from "./post";
import { User } from "./user";

export type PostsAPIResponse = PaginatedAPI & {
  posts: Post[];
};

export type UsersAPIResponse = PaginatedAPI & {
  users: User[];
};

export type UserAPIResponse = User;

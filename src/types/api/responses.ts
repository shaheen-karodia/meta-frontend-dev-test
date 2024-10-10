import { DisplayPost } from "./display-post";
import { TopUser } from "./top-user";
import { UserProfile } from "./user-profile";

type StandardError = {
  success: false;
  error: string;
};

type PaginatedAPI = {
  total: number;
  nextId: number | null;
  cursor: number;
};

export type SuggestedPostsAPIResponse =
  | {
      success: true;
      posts: DisplayPost[];
    }
  | StandardError;

export type TopUsersAPIResponse =
  | {
      success: true;
      users: TopUser[];
    }
  | StandardError;

export type UserProfileAPIResponse =
  | {
      success: true;
      user: UserProfile;
    }
  | StandardError;

export type RecentPostsAPIResponse =
  | {
      success: true;
      posts: DisplayPost[];
      pagination: PaginatedAPI;
    }
  | StandardError;

export type UserPostsAPIResponse =
  | {
      success: true;
      posts: DisplayPost[];
      pagination: PaginatedAPI;
    }
  | StandardError;

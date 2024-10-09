import { PaginatedAPI } from "../utils";
import { DisplayPost } from "./display-post";
import { TopUser } from "./top-user";
import { UserProfile } from "./user-profile";

type StandardError = {
  success: false;
  error: string;
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
      posts: UserProfile;
      meta: PaginatedAPI;
    }
  | StandardError;

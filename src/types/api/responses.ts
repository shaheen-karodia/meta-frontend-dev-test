import { SuggestedPost } from "./suggested-post";
import { TopUser } from "./top-user";

type StandardError = {
  success: false;
  error: string;
};

export type SuggestedPostsAPIResponse =
  | {
      success: true;
      posts: SuggestedPost[];
    }
  | StandardError;

export type TopUsersAPIResponse =
  | {
      success: true;
      users: TopUser[];
    }
  | StandardError;

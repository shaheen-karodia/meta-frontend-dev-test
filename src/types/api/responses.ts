import { SuggestedPost } from "./suggested-post";

export type SuggestedPostsAPIResponse =
  | {
      success: true;
      posts: SuggestedPost[];
    }
  | {
      success: false;
      error: string;
    };

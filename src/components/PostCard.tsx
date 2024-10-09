import React from "react";

import PostStat from "./PostStat";
import Tag from "./Tag";
import BodyText from "./typography/BodyText";
import Avatar from "./Avatar";
import Heading from "./typography/Heading";
import Skeleton from "./Skeleton";
import { SuggestedPost } from "@/types/api/suggested-post";

type PostCardProps = Omit<SuggestedPost, "id" | "userId"> & {
  className?: string;
  skeleton?: boolean;
};

//TODO: Hover

const PostCard: React.FC<PostCardProps> = ({
  className = "",
  tags,
  body,
  username,
  firstName,
  lastName,
  skeleton,
  likes,
  dislikes,
  views,
}) => {
  return (
    <div
      className={`flex flex-col border rounded-2xl border-gray-300 ${className}`}
    >
      <div className="p-4 flex items-start">
        <Avatar className="mr-3" skeleton={skeleton} />
        <div>
          {skeleton ? (
            <Skeleton width={160} height={24} className="mb-2" />
          ) : (
            <Heading size="h4">
              {firstName} {lastName}
            </Heading>
          )}

          {skeleton ? (
            <Skeleton width={100} height={16} className="mb-4" />
          ) : (
            <BodyText element="p" size="small" className="text-secondary mb-3">
              @{username}
            </BodyText>
          )}

          {skeleton ? (
            <>
              <Skeleton width={200} height={16} className="mb-3" />
              <Skeleton width={200} height={16} className="mb-3" />
              <Skeleton width={180} height={16} className="mb-4" />
            </>
          ) : (
            <BodyText element="p" size="medium" className="text-secondary mb-3">
              {body}
            </BodyText>
          )}
          <div className="flex justify-start">
            {skeleton && (
              <>
                <Skeleton width={30} height={16} className="mr-3" />
                <Skeleton width={30} height={16} className="mr-3" />
                <Skeleton width={30} height={16} className="mr-3" />
              </>
            )}
            {!skeleton &&
              tags.map((tag) => (
                <Tag key={tag} href="#" className="mr-3">
                  #{tag}
                </Tag>
              ))}
          </div>
        </div>
      </div>
      <div className="border-t p-4 flex">
        {skeleton && (
          <>
            <Skeleton width={60} height={20} className="mr-6" />
            <Skeleton width={60} height={20} className="mr-6" />
            <Skeleton width={60} height={20} className="mr-6" />
          </>
        )}
        {!skeleton && (
          <>
            <PostStat variant="like" number={likes} className="mr-6" />
            <PostStat variant="replies" number={dislikes} className="mr-6" />
            <PostStat variant="views" number={views} className="mr-6" />
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;

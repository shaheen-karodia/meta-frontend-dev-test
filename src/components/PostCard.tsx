import React from "react";

import PostStat from "./PostStat";
import Tag from "./Tag";
import BodyText from "./typography/BodyText";
import Avatar from "./Avatar";
import Heading from "./typography/Heading";

type PostCardProps = {
  firstName: string;
  lastName: string;
  username: string;
  tags: string[];
  // views: number;
  // reactions: {
  //   dislikes: number;
  //   likes: number;
  // };
  // image: string;
  body: string;
  className?: string;
};

//TODO: Type
//TODO: Skeleton
//TODO: Hover

const PostCard: React.FC<PostCardProps> = ({
  className = "",
  tags,
  body,
  username,
  firstName,
  lastName,
}) => {
  return (
    <div
      className={`flex flex-col border rounded-2xl border-gray-300 ${className}`}
    >
      <div className="p-4 flex items-start">
        <Avatar className="mr-3" />
        <div>
          <Heading size="h4">
            {firstName} {lastName}
          </Heading>
          <BodyText element="p" size="small" className="text-secondary mb-3">
            @{username}
          </BodyText>
          <BodyText element="p" size="medium" className="text-secondary mb-3">
            {body}
          </BodyText>
          <div className="flex justify-start">
            {tags.map((tag) => (
              <Tag key={tag} href="#" className="mr-3">
                #{tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t p-4 flex">
        <PostStat variant="like" number={20} className="mr-6" />
        <PostStat variant="replies" number={20} className="mr-6" />
        <PostStat variant="views" number={20} className="mr-6" />
      </div>
    </div>
  );
};

export default PostCard;

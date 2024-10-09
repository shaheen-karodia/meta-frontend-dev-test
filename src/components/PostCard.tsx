import React from "react";

import PostStat from "./PostStat";
import Tag from "./Tag";
import BodyText from "./typography/BodyText";
import Avatar from "./Avatar";
import Heading from "./typography/Heading";
import { DisplayPost } from "@/types/api/display-post";
import Link from "next/link";

type PostCardProps = Omit<DisplayPost, "id"> & {
  className?: string;
};

const PostCard: React.FC<PostCardProps> = ({
  userId,
  className = "",
  tags,
  body,
  username,
  firstName,
  lastName,
  likes,
  dislikes,
  views,
}) => {
  return (
    <div
      className={`flex flex-col border rounded-2xl border-gray-300 bg-white ${className}`}
    >
      <div className="p-4 flex items-start">
        <Avatar className="mr-3" link={`/profile/${userId}`} />
        <div>
          <Link href={`/profile/${userId}`}>
            <Heading size="h4">
              {firstName} {lastName}
            </Heading>
          </Link>

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
        <PostStat variant="like" number={likes} className="mr-6" />
        <PostStat variant="replies" number={dislikes} className="mr-6" />
        <PostStat variant="views" number={views} className="mr-6" />
      </div>
    </div>
  );
};

export default PostCard;

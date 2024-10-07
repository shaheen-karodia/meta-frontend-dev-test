import React from "react";

import PostStat from "./PostStat";
import Tag from "./Tag";
import BodyText from "./typography/BodyText";
import Avatar from "./Avatar";
import Heading from "./typography/Heading";

// type TPostCard = {
//   firstName: string;
//   lastName: string;
//   username: string;
//   tags: string[];
//   views: number;
//   reactions: {
//     dislikes: number;
//     likes: number;
//   };
//   image: string;
//   body: string;
// };

//TODO: Type
//TODO: Skeleton
//TODO: Hover

const PostCard: React.FC = () => {
  return (
    <div className="flex flex-col border rounded-2xl border-gray-300 ">
      <div className="p-4 flex items-start">
        <Avatar />
        <div>
          <Heading size="h4">Emily Johnson</Heading>
          <BodyText element="p" size="small" className="text-secondary mb-3">
            @emily
          </BodyText>
          <BodyText element="p" size="medium" className="text-secondary mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            provident sapiente quasi, mollitia blanditiis ipsam esse ullam?
            Tempore odio obcaecati, ratione cupiditate cumque rerum beatae,
            quasi repellat veniam recusandae maiores consequuntur quibusdam
            itaque! Minima odio sint aut nisi praesentium molestias.
          </BodyText>
          <div className="flex justify-start">
            <Tag href="#" className="mr-3">
              #react
            </Tag>
            <Tag href="#" className="mr-3">
              #javascript
            </Tag>
            <Tag href="#" className="mr-3">
              #typescript
            </Tag>
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

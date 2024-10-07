import React from "react";

import PostStat from "./PostStat";

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

const PostCard: React.FC = () => {
  return (
    <div className="flex flex-col border rounded-2xl border-gray-300 ">
      <div className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        provident sapiente quasi, mollitia blanditiis ipsam esse ullam? Tempore
        odio obcaecati, ratione cupiditate cumque rerum beatae, quasi repellat
        veniam recusandae maiores consequuntur quibusdam itaque! Minima odio
        sint aut nisi praesentium molestias.
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

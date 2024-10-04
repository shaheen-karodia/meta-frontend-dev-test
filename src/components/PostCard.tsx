import React from "react";

type TPostCard = {
  firstName: string;
  lastName: string;
  username: string;
  tags: string[];
  views: number;
  reactions: {
    dislikes: number;
    likes: number;
  };
  image: string;
  body: string;
};

const PostCard: React.FC<TPostCard> = (props) => {
  return (
    <div className="flex flex-col border rounded-2xl">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        provident sapiente quasi, mollitia blanditiis ipsam esse ullam? Tempore
        odio obcaecati, ratione cupiditate cumque rerum beatae, quasi repellat
        veniam recusandae maiores consequuntur quibusdam itaque! Minima odio
        sint aut nisi praesentium molestias.
      </div>
      <div className="border-t">The bottom section</div>
    </div>
  );
};

export default PostCard;

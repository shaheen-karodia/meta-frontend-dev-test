import Image from "next/image";
import BodyText from "./typography/BodyText";

type PostStatProps = {
  variant: "like" | "views" | "replies";
  number: number;
  className?: string;
};

const PostStat: React.FC<PostStatProps> = ({ variant, number, className }) => {
  let url = "";
  let alt = "";

  switch (variant) {
    case "like":
      url = "/icons/thumbs-up.svg";
      alt = "Likes";
      break;
    case "views":
      url = "/icons/eye.svg";
      alt = "Views";
      break;
    case "replies":
      url = "/icons/send.svg";
      alt = "Replies";
      break;
    default:
      break;
  }

  return (
    <div className={`flex ${className}`}>
      <Image src={url} alt={alt} width="16" height="16" className="mr-1" />
      <BodyText size="medium" element="p" className="text-secondary">
        {number}
      </BodyText>
    </div>
  );
};

export default PostStat;

import { FC } from "react";

import MenuIcon from "../../../assets/icons/dotsHorizontal.svg";
import CommentIcon from "../../../assets/icons/comment.svg";

type PostProps = {
  content: string;
  userName?: string;
  duration?: string;
  commentCount?: number;
  isEdited?: boolean;
  imgSrc?: string;
  icon: string;
};

const Post: FC<PostProps> = ({
  content,
  commentCount = 0,
  duration,
  userName,
  imgSrc,
  icon,
  isEdited = false,
}) => {
  return (
    <div className="w-full bg-thunderGray px-5 py-6 rounded-md">
      <div className="flex justify-between pb-5 ">
        <div className="flex gap-5">
          <div className="bg-mirage rounded-[50%] w-12 h-12 flex items-center justify-center">
            {imgSrc ? (
              <img
                src={imgSrc}
                className="rounded-[50%] w-12 h-12 flex items-center justify-center"
              />
            ) : (
              userName?.charAt(0)
            )}
          </div>
          <div>
            <div className="text-base text-silver pb-1 cursor-pointer">
              {userName}
            </div>
            <div className="text-granite text-sm font-medium">
              {duration} <span>{isEdited ? "• Edited" : ""}</span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <MenuIcon />
        </div>
      </div>
      <div className="flex gap-4 bg-mirage rounded-md p-4">
        <div className="bg-thunderGray rounded-[50%] w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        <div className="w-full text-granite font-normal text-base leading-6">
          {content}
        </div>
      </div>
      {!!commentCount && (
        <div className="flex gap-3 items-center text-granite text-sm font-medium leading-4 cursor-pointer pt-3.5">
          <CommentIcon />
          {`${commentCount} comment${commentCount > 1 ? "s" : ""}`}
        </div>
      )}
    </div>
  );
};

export default Post;

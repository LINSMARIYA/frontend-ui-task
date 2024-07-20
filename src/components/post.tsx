import { FC } from "react";

type PostProps = {
  content: string;
  userName?: string;
  duration?: string;
  commentCount?: string;
};

const Post: FC<PostProps> = ({ content }) => {
  return (
    <div className="w-full bg-thunderGray px-5 py-6 rounded-md">
      <div className="pb-5 flex gap-5">
        <div className="bg-mirage rounded-[50%] w-12 h-12 flex items-center justify-center">
          N
        </div>
        <div>
          <div className="text-base text-silver pb-1">Therees Web</div>
          <div className="text-granite text-sm font-medium">5 minutes ago</div>
        </div>
      </div>
      <div className="flex gap-4 bg-mirage rounded-md p-4">
        <div className="bg-thunderGray rounded-[50%] w-12 h-12 flex items-center justify-center">
          👋
        </div>
        <div className="w-full text-granite font-normal text-base leading-6 min-h-[107px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Post;

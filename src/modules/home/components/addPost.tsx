import { FC } from "react";

import Button from "../../../components/button/button";

type CreatePostProps = {
  onClickPost: () => void;
};

const CreatePost: FC<CreatePostProps> = ({ onClickPost }) => {
  return (
    <div className="w-full bg-thunderGray px-5 py-6 rounded-md">
      <div className="text-silver font-medium text-[18px] leading-5 pb-4">
        Create post
      </div>
      <div className="flex gap-4 bg-mirage rounded-md p-4">
        <div className="bg-thunderGray rounded-[50%] w-12 h-12 flex items-center justify-center">
          💬
        </div>
        <div className="w-full text-granite font-normal text-base leading-6">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md resize-none placeholder-gray-400 bg-transparent focus:outline-none border-none focus:border-none outline-none"
            placeholder="How are you feeling today?"
            style={{
              minHeight: "32px",
              height: "auto",
              maxHeight: "800px",
              overflowY: "hidden",
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-end pt-6">
        <Button label="Post" onClick={onClickPost} customStyle="!w-[113px]" />
      </div>
    </div>
  );
};

export default CreatePost;

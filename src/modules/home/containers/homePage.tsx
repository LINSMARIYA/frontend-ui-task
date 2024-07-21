import { useState } from "react";

import CreatePost from "../components/addPost";
import Post from "../components/post";
import post from "../../../constants/post";
import Modal from "../../../components/modal/modal";
import Login from "../../login/Login";

const homePage = () => {
  const [isModalOpen, setIsOpen] = useState(false);

  const userFirstName = "Jane";
  const postData = post.postData;

  const onClickPost = () => {
    setIsOpen(true);
  };

  return (
    <div className="text-white w-[700px] pt-[69px] px-10 scrollbar overflow-auto scroll-smooth max-h-screen pb-5">
      <div className="h-full">
        <div className="text-silver text-[28px] font-medium leading-8 text-left">{`Hello ${userFirstName}`}</div>
        <div className="text-base font-normal leading-6 text-granite pt-3 pb-10 md:w-[70%]">
          {
            "How are you doing today? Would you like to share something with the community 🤗"
          }
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-10">
        <CreatePost onClickPost={onClickPost} />
        {postData.map((item) => (
          <Post
            content={item.content}
            key={item.index}
            commentCount={item.commentCount}
            duration={item.duration}
            imgSrc={item.imgSrc}
            isEdited={item.isEdited}
            userName={item.userName}
            icon={item.icon}
          />
        ))}
      </div>
      <Modal
        customModalStyle="md:min-w-[423px] md:min-h-[420px] !bg-primaryBlue"
        isOpen={isModalOpen}
        onClose={() => setIsOpen(false)}
      >
        <Login />
      </Modal>
    </div>
  );
};

export default homePage;

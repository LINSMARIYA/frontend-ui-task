import CreatePost from "../../components/editPost";
import Post from "../../components/post";

const homePage = () => {
  const userFirstName = "Jane";
  const postData = [
    {
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <div className="text-white w-[700px] h-full">
      <div className="text-silver text-[28px] font-medium leading-8 text-left">{`Hello ${userFirstName}`}</div>
      <div className="text-base font-normal leading-6 text-granite pt-3 pb-10 w-[70%]">
        {
          "How are you doing today? Would you like to share something with the community 🤗"
        }
      </div>
      <div className="flex flex-col gap-4">
        <CreatePost />
        {postData.map((item) => (
          <Post content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default homePage;

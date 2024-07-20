import Login from "./Login";

const LoginPage = () => {
  return (
    <div className="text-white">
      <div className="w-full flex items-center justify-center mb-12">
        <img src="./Logo.svg" />
      </div>
      <div className="h-full w-full rounded-md border-gradient bg-gradient-to-b from-gray-500 to-gray-800 p-[2px]">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;

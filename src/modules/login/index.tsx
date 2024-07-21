import Login from "./Login";

const LoginPage = () => {
  return (
    <div className="text-white">
      <div className="w-full flex items-center justify-center mb-12">
        <img src="./Logo.svg" />
      </div>

      <Login customContainerStyle="sm:min-w-[423px] sm:min-h-[420px] !bg-primaryBlue" />
    </div>
  );
};

export default LoginPage;

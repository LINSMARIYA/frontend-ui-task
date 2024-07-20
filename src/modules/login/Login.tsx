import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button";
import TextInput from "../../components/textInput";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogIn] = useState(true);

  const onClickLogIn = () => {
    console.log("login");
    navigate("/home");
  };
  const onClickRegister = () => {
    console.log("here");
    setIsLogIn((prev) => !prev);
  };
  return (
    <div className="w-[463px] min-h-[420px] bg-[#27292D] rounded-md px-6 py-10">
      <div className="text-center">
        <div className="text-[#6B6C70] font-medium text-sm leading-4">
          {isLogin ? "Welcome Back" : "SIGN UP"}
        </div>
        <div className="text-white font-semibold text-lg leading-5 mt-1.5">
          {isLogin ? "Log into your account" : "Create an account to continue"}
        </div>
      </div>
      <div className="pt-11">
        <TextInput
          label={isLogin ? "Email or Username" : "Email"}
          onChange={() => {}}
          placeholder={`Enter your email ${isLogin ? "or username" : ""}`}
        />
        {!isLogin && (
          <TextInput
            label="Username"
            placeholder="Enter your username"
            onChange={() => {}}
          />
        )}
        <TextInput
          label="Password"
          placeholder={
            isLogin ? "Enter your password" : "Choose a strong password"
          }
          tailText={isLogin ? "Forgot password?" : ""}
          onChange={() => {}}
        />
      </div>

      <Button label="Login now" onClick={onClickLogIn} />
      <div className="text-white font-semibold text-lg leading-5 mt-1.5">
        <div className="flex text-sm font-medium leading-4 pt-3">
          <div className="text-[#7F8084] pr-1">
            {isLogin ? "Not registered yet?" : "Already have an account?"}
          </div>
          <div className="text-white cursor-pointer" onClick={onClickRegister}>
            {isLogin ? "Register →" : " Login →"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

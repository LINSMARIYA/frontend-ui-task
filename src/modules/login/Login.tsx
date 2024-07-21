import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "../../components/button/button";
import TextInput from "../../components/TextInput/textInput";

const Login = ({ customContainerStyle }: { customContainerStyle?: string }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const [isLogin, setIsLogIn] = useState(true);

  const onClickLogIn = () => {
    navigate("/frontend-ui-task/home");
  };
  const onClickRegister = () => {
    if (location.pathname === "/frontend-ui-task/login") {
      navigate("/frontend-ui-task/signIn");
    } else if (location.pathname === "/frontend-ui-task/signIn") {
      navigate("/frontend-ui-task/login");
    }

    setIsLogIn((prev) => !prev);
  };

  return (
    <div className="h-full w-full rounded-md border-gradient bg-gradient-to-b from-gray-300 to-gray-700 p-[2px]">
      <div
        className={`max-w-[463px] min-h-[420px] bg-thunderGray rounded-md px-6 py-10 ${customContainerStyle}`}
      >
        <div className="text-center">
          <div className="text-doveGray font-medium text-sm leading-4">
            {isLogin ? "Welcome Back" : "SIGN UP"}
          </div>
          <div className="text-white font-semibold text-lg leading-5 mt-1.5">
            {isLogin
              ? "Log into your account"
              : "Create an account to continue"}
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
            inputType="password"
            placeholder={
              isLogin ? "Enter your password" : "Choose a strong password"
            }
            tailText={isLogin ? "Forgot password?" : ""}
            onChange={() => {}}
          />
        </div>

        <Button
          label={isLogin ? "Login now" : "continue"}
          onClick={onClickLogIn}
        />
        <div className="text-white font-semibold text-lg leading-5 mt-1.5">
          <div className="flex text-sm font-medium leading-4 pt-3">
            <div className="text-granite pr-1">
              {isLogin ? "Not registered yet?" : "Already have an account?"}
            </div>
            <div
              className="text-silver cursor-pointer"
              onClick={onClickRegister}
            >
              <span className="hover:underline underline-offset-2">
                {isLogin ? "Register" : " Login "}
              </span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

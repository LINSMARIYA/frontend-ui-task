import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Home = lazy(() => import("../modules/home"));
const LoginPage = lazy(() => import("../modules/login"));

const RouteLayout = () => {
  return (
    <Router>
      <div className="h-[100vh] pb-[69px] flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signIn" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RouteLayout;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "../modules/login";
import Home from "../modules/home";
import Profile from "../modules/profile";
import NotFound from '../modules/404";

const RouteLayout = () => {
  return (
    <Router basename="/frontend-ui-task">
      <div className="h-[100vh] pb-[69px] flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signIn" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RouteLayout;

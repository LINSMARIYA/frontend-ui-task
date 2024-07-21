import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "../modules/login";
import Home from "../modules/home";

const RouteLayout = () => {
  return (
    <Router>
      <div className="h-[100vh] pb-[69px] flex justify-center items-center">
        <Routes>
          <Route
            path="/frontend-ui-task"
            element={<Navigate to="/frontend-ui-task/login" />}
          />
          <Route path="/frontend-ui-task/login" element={<LoginPage />} />
          <Route path="/frontend-ui-task/signIn" element={<LoginPage />} />
          <Route path="/frontend-ui-task/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RouteLayout;

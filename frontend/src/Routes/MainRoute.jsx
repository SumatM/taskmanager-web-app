import Login from "../Pages/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Signup from "../Pages/Signup";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
};

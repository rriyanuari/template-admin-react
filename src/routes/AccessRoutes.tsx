import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const PublicRoute = () => {
  const isLoggedIn = Cookies.get("token");

  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export const PrivateRoute = () => {
  // const isLoggedIn = Cookies.get("token");

  // return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
  return <Outlet />;
};

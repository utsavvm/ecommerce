import { Navigate, Outlet } from "react-router-dom";
import { useFirst } from "./FIrstContext";

const ProtectedRouteUser = () => {
  const { isAuthenticated } = useFirst();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRouteUser;

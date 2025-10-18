import { Navigate } from "react-router-dom";
import { useFirst } from "../component/Context/FIrstContext";

const ProtectAuthRoute = ({ children }) => {
  const { isAuthenticated } = useFirst();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectAuthRoute;

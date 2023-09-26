// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../Hooks/useAuth";

import { ReactNode } from "react";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  // const data = useAuth();
  // const location = useLocation();

  // if (!data.token) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }
  return <>{children}</>;
};

export default PrivateRoutes;

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/layouts/Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const isLoading = false;
  const email = "test@gmail.com";

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/signin" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;

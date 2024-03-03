import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/layouts/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../utils/firebase.config";
import { setUser, toggleLoading } from "../redux/features/user/userSlice";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { email, isLoading } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            isLoading: false,
            avatar: user.photoURL,
          })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(false));
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/signin" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;

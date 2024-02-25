import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../pages/Tasks";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";
import Users from "../pages/Users";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default routes;

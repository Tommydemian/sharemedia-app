import { useRoutes, RouteObject } from "react-router-dom";
import CreatePin from "./Components/CreatePin";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import PinDetails from "./Components/PinDetails";
import Search from "./Components/Search";
import UserProfile from "./Components/UserProfile";
import Home from "./Container/Home";
import Pins from "./Container/Pins";

const Router = (props: any) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user-profile/:userId",
      element: <UserProfile />,
    },
    {
      path: "/pins",
      element: <Pins />,
      children: [
        {
          path: "category/:categoryID?",
          element: <Feed />,
        },
        {
          path: "pin-detail/:pinID",
          element: <PinDetails {...props} />,
        },
        {
          path: "create-pin",
          element: <CreatePin {...props} />,
        },
        {
          path: "search",
          element: <Search {...props} />,
        },
      ],
    },
    {
      path: "*",
      element: <div>404 Not found</div>,
    },
  ];

  return useRoutes(routes);
};

export default Router;

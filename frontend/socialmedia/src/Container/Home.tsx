import React, { useEffect, useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";

// Third party libraries
import { Icon } from "@iconify/react";

import { client } from "../client";
// Components
import Pins from "./Pins";
import Sidebar from "../Components/Sidebar";
import UserProfile from "../Components/UserProfile";

// Custom hooks
import { useToggle } from "../hooks/useToggle";
//utils
import { userQuery } from "../utils/data";
// Assets
import logo from "../assets/sharelifelogo.png";

import { User } from "../types";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const { state: isVisisble, toggle } = useToggle();

  const scrollRef = useRef<HTMLDivElement>(null);

  const userFromLocalStorage = localStorage.getItem("user");
  const userInfo = userFromLocalStorage
    ? JSON.parse(userFromLocalStorage)
    : localStorage.clear;

  useEffect(() => {
    const query = userQuery(userInfo?.name);
    console.log(userInfo);

    client
      .fetch<User>(query)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current?.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar closeToggle={toggle} user={user!} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <Icon
            icon="material-symbols:menu"
            className="text-4xl cursor-pointer"
            onClick={toggle}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img
              src={user?.image}
              alt="user-pic"
              className="w-9 h-9 rounded-full "
            />
          </Link>
        </div>
        {isVisisble && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <Icon
                icon="ion:close-circle"
                onClick={toggle}
                className="w-8 h-8 cursor-pointer"
              />
            </div>
            <Sidebar closeToggle={toggle} user={user!} />
          </div>
        )}
      </div>
      {/* This is the old div */}
      {/* <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default Home;

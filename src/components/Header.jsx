import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownItem, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signOutUser } from "../redux/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Navbar className="flex sticky top-0 border-b-2 h-[65px] items-center">
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 via-green-400 to-pink-500 rounded-lg text-white">
            OnePoint
          </span>
          <span className=" pl-1">Banking</span>
        </Link>

        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10  lg:inline cursor-pointer"
            color="gray"
            onClick={() => dispatch(toggleTheme())}
            pill
          >
            {theme === "light" ? (
              <FaMoon className=" rounded-full dark:bg-inherit" />
            ) : (
              <FaSun
                size={"lg"}
                className=" text-2xl dark:bg-inherit text-yellow-400"
              />
            )}
          </Button>
          {currentUser ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <img
                    className=" w-9 h-9 rounded-full"
                    src="https://imgs.search.brave.com/pZ2DKWjtw7hzsB-caM9l5n5xAr6aaH4tXxJAIMSHK5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="text-sm block">@{currentUser.name}</span>
                  <span className="text-sm block font-medium truncate">
                    {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Link to={"/dashboard?tab=details"}>
                  <DropdownItem>Balance Details</DropdownItem>
                </Link>
                <Dropdown.Divider />
                <DropdownItem onClick={() => dispatch(signOutUser())}>
                  Sign Out
                </DropdownItem>
              </Dropdown>
            </>
          ) : (
            <>
              <Link to={path === "/" ? "/create-new-account" : "/"}>
                <Button gradientDuoTone={"purpleToBlue"} outline>
                  {path === "/" ? "Sign Up" : "Log In"}
                </Button>
              </Link>
            </>
          )}
        </div>
      </Navbar>
    </>
  );
};

export default Header;

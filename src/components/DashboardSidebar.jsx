import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiUser,
  HiDocumentText,
  HiChartPie,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { stateContext } from '../Context/BlogContext';
import { FaComment, FaInfoCircle, FaUsers } from "react-icons/fa";

const DashboardSidebar = ({ tab }) => {
  return (
    <>
      <Sidebar className="w-full md:w-56  h-screen rounded-none">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="cursor-pointer flex flex-col justify-start gap-1">
            <Link to={"/dashboard?tab=profile"}>
              <Sidebar.Item
                active={tab === "profile"}
                icon={HiUser}
                label={"User"}
                labelColor="dark"
                as="div"
              >
                Profile
              </Sidebar.Item>
            </Link>

            <>
              <Link to={"/dashboard?tab=dash"}>
                <Sidebar.Item
                  active={tab === "dash"}
                  icon={HiChartPie}
                  as="div"
                >
                  Dashboard
                </Sidebar.Item>
              </Link>
              <Link to={"/dashboard?tab=posts"}>
                <Sidebar.Item
                  active={tab === "posts"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Posts
                </Sidebar.Item>
              </Link>
              <Link to={"/dashboard?tab=users"}>
                <Sidebar.Item active={tab === "users"} icon={FaUsers} as="div">
                  Users
                </Sidebar.Item>
              </Link>
            </>

            <Sidebar.Item icon={HiArrowSmRight}>
              <span> Sign Out</span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;

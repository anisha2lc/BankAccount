import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiUser,
  HiDocumentText,
  HiChartPie,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutUser } from "../redux/userSlice";
import { FaUsers } from "react-icons/fa";
import { PiHandDepositBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";

const DashboardSidebar = ({ tab }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Sidebar className="w-full md:w-56  md:min-h-screen rounded-none">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="cursor-pointer flex flex-col justify-start gap-1">
            <>
              <Link to={"/dashboard?tab=details"}>
                <Sidebar.Item
                  active={tab === "details"}
                  icon={HiChartPie}
                  as="div"
                  label="current"
                >
                  Dashboard
                </Sidebar.Item>
              </Link>
              <Link to={"/dashboard?tab=withdraw"}>
                <Sidebar.Item
                  active={tab === "withdraw"}
                  icon={BiMoneyWithdraw}
                  as="div"
                >
                  WithDraw
                </Sidebar.Item>
              </Link>
              <Link to={"/dashboard?tab=deposit"}>
                <Sidebar.Item
                  active={tab === "deposit"}
                  icon={PiHandDepositBold}
                  as="div"
                >
                  Deposit
                </Sidebar.Item>
              </Link>
            </>

            <Sidebar.Item
              icon={HiArrowSmRight}
              onClick={() => dispatch(signOutUser())}
            >
              <span> Sign Out</span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;

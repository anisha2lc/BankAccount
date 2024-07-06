import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { useSelector } from "react-redux";
import DepositForm from "./DepositForm";
import WithdrawAmount from "./WithdrawAmount";
import ToggleBalance from "./ToggleBalance";
import { QRCodeSVG } from "qrcode.react";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlparams = new URLSearchParams(location.search);
    const tabFromUrl = urlparams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className="md:min-h-screen w-full flex md:flex-row flex-col  ">
      <div className="md:w-56 bg-inherit">
        <DashboardSidebar tab={tab} />
      </div>
      <div className=" flex-1 flex justify-center mt-3 h-auto ">
        {tab === "details" ? (
          <div className=" flex p-4 flex-col items-center">
            <div className=" lg:w-[600px] text-white bg-[url('https://imgs.search.brave.com/MsG-kGOzogJfsW3uV_t8Oz38yBIdrh2KVt1VdVOEd9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWQtZ3J1bmdlLWJh/Y2tncm91bmRfMTA0/OC04OTYwLmpwZz9z/aXplPTYyNiZleHQ9/anBn')] bg-white border lg:h-52 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                    Good Afternoon!
                  </h5>
                  <h6>{currentUser.name}</h6>
                </a>
                <p className="mb-3 font-normal  dark:text-gray-400">
                  OnePoint Banking and Financial Service
                </p>
                <div className=" flex flex-col gap-1">
                  <p>
                    <span>User Id:</span> <span>{currentUser.id}</span>
                  </p>
                  <p className=" flex gap-1 items-center cursor-pointer">
                    <ToggleBalance interest={false} />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border-[1px] bg-white text-gray-700 border-red-600 cursor-pointer px-4 py-2  rounded-lg shadow">
                  <div className=" flex flex-row gap-1 text-cyan-700">
                    <span>Interest rate</span>
                    <span>4%</span>
                  </div>
                  <div className=" flex flex-col gap-1 text-cyan-700">
                    <span>Accrued Interest:</span>
                    <span>
                      <ToggleBalance interest={true} />
                    </span>
                  </div>
                </div>
                <div className="border-[1px] bg-white text-gray-700 border-red-600 cursor-pointer px-4 py-2  rounded-lg shadow">
                  <div className=" flex flex-col gap-1 text-cyan-700">
                    <span>Account Status</span>
                    <span className=" w-20 flex justify-center  bg-green-500 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full ">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-fit p-5 border-2 border-sky-500 rounded-lg pb-4 flex justify-center flex-col gap-4 items-center">
              <h1 className=" text-2xl font-bold">My QrCode</h1>
              <QRCodeSVG value={JSON.stringify(currentUser)} size={200} />
            </div>
          </div>
        ) : (
          <></>
        )}
        {tab === "profile" ? <></> : <></>}
        {tab === "deposit" ? <DepositForm /> : <></>}
        {tab === "withdraw" ? <WithdrawAmount /> : <></>}
      </div>
    </div>
  );
};

export default Dashboard;

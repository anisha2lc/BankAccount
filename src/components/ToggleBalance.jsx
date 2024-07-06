import React, { useState } from "react";
import { HiEye } from "react-icons/hi";
import { useSelector } from "react-redux";
import { HiEyeSlash } from "react-icons/hi2";

const ToggleBalance = () => {
  const [toggleBalance, setToggleBalance] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {toggleBalance ? (
        <>
          <span>NPR. {currentUser.totalbalance}</span>
          <HiEyeSlash
            onClick={() => setToggleBalance(false)}
            className="cursor-pointer"
          />
        </>
      ) : (
        <>
          <span>XXX.X</span>
          <HiEye
            onClick={() => setToggleBalance(true)}
            className="cursor-pointer"
          />
        </>
      )}
    </>
  );
};

export default ToggleBalance;

import React, { useState } from "react";
import { HiEye } from "react-icons/hi";
import { useSelector } from "react-redux";
import { HiEyeSlash } from "react-icons/hi2";

const ToggleBalance = ({ interest }) => {
  const [toggleBalance, setToggleBalance] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const calculateInterestAmount = () => {
    const interestRate = 0.04;
    const totalBalance = Number(currentUser.totalbalance);
    const interestAmount = interestRate * totalBalance;

    return Number(interestAmount.toFixed(2));
  };

  return (
    <>
      {toggleBalance && interest ? (
        <div className="flex gap-1 items-center">
          <span>NPR. {calculateInterestAmount()}</span>
          <HiEyeSlash
            onClick={() => setToggleBalance(false)}
            className="cursor-pointer"
          />
        </div>
      ) : toggleBalance ? (
        <>
          <span>NRP. {currentUser.totalbalance}</span>
          <HiEyeSlash
            onClick={() => setToggleBalance(false)}
            className="cursor-pointer"
          />
        </>
      ) : (
        <div className="flex gap-1 items-center">
          <span>XXX.X</span>
          <HiEye
            onClick={() => setToggleBalance(true)}
            className="cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default ToggleBalance;

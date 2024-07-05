// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { signOutUser } from '../redux/userSlice';

// const Dashboard = () => {
//   const { username } = useParams();
//   const [balance, setBalance] = useState(1000); // Example initial balance
//   const [totalDeposits, setTotalDeposits] = useState(500); // Example total deposits
//   const [totalWithdrawals, setTotalWithdrawals] = useState(200); // Example total withdrawals
// const dispatch = useDispatch()

//   const handleSignOut = () => {
//     dispatch(signOutUser())
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white py-4">
//         <h1 className="text-3xl font-bold text-center">Financial Dashboard</h1>
//         <p className="text-center mt-2">Welcome, {username}</p>
//       </header>
//       <div className="container mx-auto p-4">
//         <div className="flex justify-end mb-4">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-2">Account Information</h2>
//             <p><strong>Name:</strong> {username}</p>
//             <p><strong>Email:</strong> john.doe@example.com</p> {/* Placeholder email */}
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-2">Total Deposits</h2>
//             <p className="text-4xl">${totalDeposits.toFixed(2)}</p>
//           </div>
//           <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-2">Total Withdrawals</h2>
//             <p className="text-4xl">${totalWithdrawals.toFixed(2)}</p>
//           </div>
//           <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-2">Total Balance</h2>
//             <p className="text-4xl">${balance.toFixed(2)}</p>
//           </div>
//           <button onClick={handleSignOut}>Log out</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashbordSidebar from "./DashboardSidebar";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  //  useEffect(()=>{

  //   const urlParams = new URLSearchParams(location.search);
  //   const tabFromUrl = urlParams.get("tab");
  //   setTab(tabFromUrl);

  // },[location.search])
  return (
    <div className="h-screen flex md:flex-row flex-col  ">
      {/* sidebar */}
      <div className="md:w-56 bg-inherit">
        <DashbordSidebar />
      </div>
      <div className=" min-h-screen w-full text-gray-800 dark:bg-gray-500 dark:text-gray-200">
        Hello
      </div>
      {/* {
        tab==="profile"?<DashProfile/>:<></>
      }
      {
        tab==="posts"?<DashPosts/>:<></>
      }
{
  tab==="users"?<DashUsers/>:<></>
}
{
  tab==="comments"?<DashComments/>:<></>
}
{
  tab==="dash"?<DashComp/>:<></>
} */}
    </div>
  );
};

export default Dashboard;

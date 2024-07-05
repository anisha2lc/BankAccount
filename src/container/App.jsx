// import Dashboard from "../components/Dashboard";
// import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateNewAccount from "../components/CreateNewAccount";
import DepositAmount from "../components/DepositAmount";
import WithdrawAmount from "../components/WithdrawAmount";
import BankBalanceInquiry from "../components/BankBalanceInquiry";
import SignIn from "../components/SignIn";
import { SIGN_IN, CREATE_NEW_ACCOUNT, DEPOSIT_AMOUNT, WITHDRAW_AMOUNT, BANK_BALANCE_INQUIRY } from "../constants/routes";

function App() {

  return (
       <Router>
      <Routes>
        <Route path={SIGN_IN.INDEX} element={<SignIn />} />
        <Route path={CREATE_NEW_ACCOUNT.INDEX} element={<CreateNewAccount />} />
        <Route path={DEPOSIT_AMOUNT.INDEX} element={<DepositAmount />} />
        <Route path={WITHDRAW_AMOUNT.INDEX} element={<WithdrawAmount />} />
        <Route path={BANK_BALANCE_INQUIRY.INDEX} element={<BankBalanceInquiry />} />
      </Routes>
    </Router>
  )
}

export default App

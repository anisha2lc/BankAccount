// import Dashboard from "../components/Dashboard";
// import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateNewAccount from "../components/CreateNewAccount";
import DepositForm from "../components/DepositForm";
import WithdrawAmount from "../components/WithdrawAmount";
import BankBalanceInquiry from "../components/BankBalanceInquiry";
import SignIn from "../components/SignIn";
import { SIGN_IN, CREATE_NEW_ACCOUNT, DEPOSIT_FORM, WITHDRAW_AMOUNT, BANK_BALANCE_INQUIRY, USER_DASHBOARD } from "../constants/routes";
import UserDashboard from '../components/UserDashboard';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={SIGN_IN.INDEX} element={<SignIn />} />
        <Route element={<PrivateRoute/>}>
        <Route path={USER_DASHBOARD.INDEX} element={<UserDashboard />} />
        </Route>
        <Route path={CREATE_NEW_ACCOUNT.INDEX} element={<CreateNewAccount />} />
        <Route path={DEPOSIT_FORM.INDEX} element={<DepositForm />} />
        <Route path={WITHDRAW_AMOUNT.INDEX} element={<WithdrawAmount />} />
        <Route path={BANK_BALANCE_INQUIRY.INDEX} element={<BankBalanceInquiry />} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNewAccount from "../pages/CreateNewAccount";
import SignIn from "../pages/SignIn";
import {
  SIGN_IN,
  CREATE_NEW_ACCOUNT,
  USER_DASHBOARD,
} from "../constants/routes";
import UserDashboard from "../pages/BalanceDashboard";
import PrivateRoute from "../components/PrivateRoute";
import Header from "../components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={SIGN_IN.INDEX} element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path={USER_DASHBOARD.INDEX} element={<UserDashboard />} />
        </Route>
        <Route path={CREATE_NEW_ACCOUNT.INDEX} element={<CreateNewAccount />} />
      </Routes>
    </Router>
  );
}

export default App;

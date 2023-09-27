import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routeNames } from "./routenames";
import Profiling from "./pages/Profliling";
import Signin from "./pages/Profliling/Signin";
import Signup from "./pages/Profliling/Signup";
import ForgetPassword from "./pages/Profliling/ForgotPassword";
import NewPassword from "./pages/Profliling/NewPassword";
import Layout from "./layout";
import Home from "./pages/Home";
import Shops from "./pages/Shops";

function App() {
  return (
    <>
      <Routes>
        <Route path={routeNames.general.profiling} element={<Profiling />}>
          <Route path={routeNames.general.signin} element={<Signin />} />
          <Route path={routeNames.general.signup} element={<Signup />} />
          <Route
            path={routeNames.general.newPassword}
            element={<NewPassword />}
          />
          <Route
            path={routeNames.general.forgetPassword}
            element={<ForgetPassword />}
          />
        </Route>
        <Route path={routeNames.general.dashboard} element={<Layout />}>
          <Route path={routeNames.general.dashboard} element={<Home />} />
          <Route path={routeNames.general.activeShops} element={<Shops />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

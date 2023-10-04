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
import AddShop from "./pages/Shops/AddShop";
import ViewShop from "./pages/Shops/ViewShop";
import Drops from "./pages/Drops";
import AddDrop from "./pages/Drops/AddDrop";
import AddDropStep2 from "./pages/Drops/AddDrop/Step2";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

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
          <Route path={routeNames.general.shops} element={<Shops />} />
          <Route path={routeNames.general.addShop} element={<AddShop />} />
          <Route path={routeNames.general.viewShop} element={<ViewShop />} />
          <Route path={routeNames.general.drops} element={<Drops />} />
          <Route path={routeNames.general.addDrop1} element={<AddDrop />} />
          <Route
            path={routeNames.general.addDrop2}
            element={<AddDropStep2 />}
          />
          <Route path={routeNames.general.users} element={<Users />} />
          <Route path={routeNames.general.settings} element={<Settings />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

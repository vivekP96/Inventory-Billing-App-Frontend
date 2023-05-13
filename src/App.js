import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/LoginPage";
import Menu from "./Components/Menu";
import { Routes, Route, Navigate } from "react-router-dom";

import ViewStock from "./Components/ViewStock";
import AddStock from "./Components/AddStock";
import DashBoard from "./Components/DashBoard";
import Bill from "./Components/Bill";
import ViewOrder from "./Components/ViewOrder";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

import { useLocation } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");

  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div
      className={
        location.pathname !== "/login" && location.pathname !== "/register"
          ? "App"
          : "app-login"
      }
    >
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <div>
          <Menu />
        </div>
      )}
      <div>
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Home />}
        <Routes>
          {user && <Route path="/" exact element={<DashBoard />}></Route>}

          <Route path="/signup" exact element={<Signup />}></Route>
          <Route path="/login" exact element={<LoginPage />}></Route>
          <Route path="/register" exact element={<Signup />}></Route>
          {user && (
            <Route path="/viewstock" exact element={<ViewStock />}></Route>
          )}
          {user && (
            <Route path="/addstock" exact element={<AddStock />}></Route>
          )}
          <Route path="/dashboard" exact element={<DashBoard />}></Route>
          {user && <Route path="/bill" exact element={<Bill />}></Route>}
          {user && (
            <Route path="/vieworder" exact element={<ViewOrder />}></Route>
          )}
          <Route
            path="/"
            exact
            element={<Navigate replace to="/login" />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

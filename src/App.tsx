import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Blesscomn from "./pages/data/Blesscomn";
import Ibadah from "./pages/data/Ibadah";
import Jemaat from "./pages/data/Jemaat";
import Pelayanan from "./pages/data/Pelayanan";
import Pemuridan from "./pages/data/Pemuridan";
import ListEvent from "./pages/events/ListEvent";
import NotFound from "./pages/notfound/NotFound";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="auth/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot" element={<Forgot />} />
          </Route>
          <Route path="data/">
            <Route index element={<Ibadah />} />
            <Route path="ibadah" element={<Ibadah />} />
            <Route path="blesscomn" element={<Blesscomn />} />
            <Route path="pelayanan" element={<Pelayanan />} />
            <Route path="pemuridan" element={<Pemuridan />} />
            <Route path="jemaat" element={<Jemaat />} />
          </Route>
          <Route path="events/" element={<ListEvent />} />
          <Route path="article/" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

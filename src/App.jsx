import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register";
import Signin from "./components/Auth/Signin";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Signin />} path="/login"></Route>
          <Route path="*" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {user && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

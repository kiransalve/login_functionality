import React from "react";
import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header_left">
        <Link to="/" className="header_logo">
          House of Dishes
        </Link>
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/about" className="navlink">
          About
        </Link>
        <Link to="/dashboard" className="navlink">
          Dashboard
        </Link>
      </div>
      <div className="header_right">
        <div
          className="logout"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3>Appointment Application</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="navbar">
        <h1 className="BetterAddDropText">
          <a href="/">Jimmy Huynh | Portfolio</a>
        </h1>

        <ul className="nav_links_container">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          {/* <li>
            {" "}
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <header className="navbar">
      <nav>
        <Link to="/">
          <img
            src="/images/lll.png"
            width={150}
            height={150}
            alt="LOGO"
            id="Logo"
          />
        </Link>

        <ul className="nav-links">
          <Link to="/SignIn" style={{ textDecoration: "none" }}>
            <button className="btn"> SignIn</button>
          </Link>

          <Link to="/SignUp" style={{ textDecoration: "none" }}>
            <button className="btn">SignUp</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default navbar;

import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const linksRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      linksRef.current.style.display = "flex";
    } else {
      linksRef.current.style.display = "none";
    }
  }, [toggle]);
  return (
    <div className="nav-wrapper">
      <Link to="/">
        <img src={"/assets/shared/logo.svg"} alt="logo" className="logo" />
      </Link>
      <nav className="navbar">
        <div className="line"></div>
        <ul className="nav-links">
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link className="link" to="/">
              <span>00</span> home
            </Link>
          </li>
          <li className={splitLocation[1] === "destination" ? "active" : ""}>
            <Link className="link" to="/destination">
              <span>01</span> destination
            </Link>
          </li>
          <li className={splitLocation[1] === "crew" ? "active" : ""}>
            <Link className="link" to="/crew">
              <span>02</span> crew
            </Link>
          </li>
          <li className={splitLocation[1] === "technology" ? "active" : ""}>
            <Link className="link" to="/technology">
              <span>03</span> technology
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar-mobile">
        <ul className="nav-links" ref={linksRef}>
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link
              onClick={() => {
                setToggle(false);
              }}
              className="link"
              to="/"
            >
              <span>00</span> home
            </Link>
          </li>
          <li className={splitLocation[1] === "destination" ? "active" : ""}>
            <Link
              onClick={() => {
                setToggle(false);
              }}
              className="link"
              to="/destination"
            >
              <span>01</span> destination
            </Link>
          </li>
          <li className={splitLocation[1] === "crew" ? "active" : ""}>
            <Link
              onClick={() => {
                setToggle(false);
              }}
              className="link"
              to="/crew"
            >
              <span>02</span> crew
            </Link>
          </li>
          <li className={splitLocation[1] === "technology" ? "active" : ""}>
            <Link
              onClick={() => {
                setToggle(false);
              }}
              className="link"
              to="/technology"
            >
              <span>03</span> technology
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={() => setToggle(!toggle)} className="toggle">
        <img
          src={
            toggle
              ? "/assets/shared/icon-close.svg"
              : "/assets/shared/icon-hamburger.svg"
          }
          alt="toggle"
        ></img>
      </div>
    </div>
  );
}

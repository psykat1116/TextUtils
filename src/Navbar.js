import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">
          TextUtils
        </Link>
        <button
          className={`navbar-toggler bg-${props.mode==='light'?'dark':'light'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-check form-switch w-25 d-flex">
        <input
          className="form-check-input mx-3"
          onClick={props.toggle}
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Mode
        </label>
      </div>
    </nav>
  );
}

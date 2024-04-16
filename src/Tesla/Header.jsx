import React, { useState } from "react";
import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  function showMenu(e) {
    e.preventDefault();
    setSideBarOpen(true);
  }
  function hideMenu(e) {
    e.preventDefault();
    setSideBarOpen(false);
  }
  return (
    <>
      <header>
        <img src="images/logo.svg" alt="" />
        <ul className="mainMenu">
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panels</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="" onClick={showMenu}>
              Menu
            </a>
          </li>
        </ul>
      </header>

      <ul className="sideBar" style={{ right: sideBarOpen ? 0 : "-250px" }}>
        <span className="closeBar">
          <CloseIcon onClick={hideMenu} />
        </span>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Soalr Panels</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade In</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href="">Powerwall</a>
        </li>
        <li>
          <a href="">Commercial Energy</a>
        </li>
      </ul>
    </>
  );
}

export default Header;

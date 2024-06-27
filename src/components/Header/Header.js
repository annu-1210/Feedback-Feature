import React from "react";
import "./Header.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <div className="h-left">
          THE <span className="left-product">PRODUCT</span> PLATFORM
        </div>
        <div className="h-right">
          <div className="h-links">
            <div className="link-learn">
              <span>Learn</span>
              <IoIosArrowDropdownCircle />
            </div>
            <div className="link-practice">
              <span>Practice</span>
              <IoIosArrowDropdownCircle />
            </div>
          </div>
          <div className="h-user">
            <img src="./user-logo.png" alt="logo" width={40} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Header() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signup');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
            <div className="user-dropdown">
              <div className="user-icon">
                <img src="./user-logo.png" alt="logo" width={40} />
                <IoIosArrowDropdownCircle />
              </div>
              <div className="dropdown-content">
                {user && <span className="user-name">{user.displayName}</span>}
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

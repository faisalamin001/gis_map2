import React from "react";
import "./navbar.css";
import { IoMdNotifications, IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <h2>Provincial Housing Authority</h2>
      </div>
      <div className='admin'>
        <div className='notification'>
          {" "}
          <IoMdNotifications />{" "}
        </div>
        <div className='profile'>
          <img
            src='https://i.postimg.cc/SNrsY6hg/72-723761-student-png-sammilani-mahavidyalaya-undergraduate-and-dummy-user.png'
            alt=''
          />
          <p className='name'>John Doe</p>
        </div>
        <div className='btn'>
          {" "}
          <IoMdArrowDropdown />{" "}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "./Sidebar.style.css";
import SidebarOption from "./SidebarOption";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";


const options = [
  { title: "Home", Icon: FaHome },
  { title: "Search", Icon: FaSearch },
  { title: "Your Library", Icon: BiLibrary },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
        className="sidebar__logo"
      />
      {options.map((option, index) => (
        <SidebarOption key={index} title={option.title} Icon={option.Icon} />
      ))}
    </div>
  );
};

export default Sidebar;

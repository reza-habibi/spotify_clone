import React from "react";
import "./Sidebar.style.css";
import SidebarOption from "./SidebarOption";
import { FaHome, FaSearch, FaPlus, FaHeart } from "react-icons/fa";
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

      <br />
      <strong className="sidebar__playlist">
        <SidebarOption title="Create Playlist" Icon={FaPlus} />
      </strong>
      <br />
      <strong className="sidebar__liked">
        <SidebarOption title="Liked Song" Icon={FaHeart} />
      </strong>
      <hr />
    </div>
  );
};

export default Sidebar;

import React from "react";
import "./SidebarOption.style.css";
const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon ? (
        <>
          <h4 className="sidebarOption__icon" ><Icon/></h4>
          <p>{title}</p>
        </>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
};

export default SidebarOption;

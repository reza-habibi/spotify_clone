import React from "react";
import { Sidebar, Body, Footer } from "./PlayerComponent";
import "./Player.style.css";
const Player = () => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;

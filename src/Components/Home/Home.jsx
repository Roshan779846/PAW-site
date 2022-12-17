import React from "react";
import './Home.css'
import Planet from '../../img/planet2.jpg'

const Home = () => {
  return (
    <div className="Home">
      <div className="h-right">
        <img className="planet" src={Planet} alt="" />
      </div>

      <div className="h-left">
        <div className="intro">
          <div className="space-intro">
            <h1>SPACE</h1>
          </div>
          <div className="name-intro">
            <h4>PAW society of MAIT</h4>
          </div>
          <div className="tagline-intro">
            <h4> TOGETHER WE GO BEYOND SKY </h4>
          </div>
        </div>

        <div className="overview">
          <div className="h-overview">
            <h3>Overview</h3>
          </div>

          <div className="d-overview">
            <span>
              Pixel is on a mission to build a health monitor for the planet
              through a constellation of cutting edge hyperspecial small
              satellites
            </span>
            <br />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

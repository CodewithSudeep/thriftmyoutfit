import React from "react";
import Marquee from "react-fast-marquee";
import Landing from "../../assets/landing1.jpeg";

import "./styles/style.css";

export default function Home() {
  return (
    <div className="home__container">
      {/**
       * @section => landing
       */}
      <div className="landing__container">
        <div className="left">
          <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
          <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div>
          <h1>
            The joy of<br /> dressing. 🥳
          </h1>
          <p>
            I might wear <b className="skinny">skinny pants</b> one day;
            <br /> I might wear <b>thrifted pants</b> the next day.
            <br />
            <i>- Post Malone</i>
          </p>
        </div>
        <div className="right">
          <img src={Landing} alt="Women Carrying Shopping Bag" />
        </div>
      </div>

      {/**
       * @section => banner
       */}
       <div className="stylesBanner__container">
        <Marquee>
        A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i> A CLASSIC NEVER GOES OUT OF STYLE <i className="ri-vip-diamond-fill"></i>
        </Marquee>
       </div>
    </div>
  );
}

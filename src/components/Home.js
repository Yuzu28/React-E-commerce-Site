import React, { Component } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Container">
        <img src={process.env.PUBLIC_URL + '/img/wallps.jpg'} alt="home" className="Img" />
        <div className="Overlay" />
        <div className="Headding">
          <h1 className="Title">
          Chinese Zodiac T-Shirts
          </h1>

          <h5 className="Title2">
          - Represent your Zodiac Sign
          </h5>
          <NavLink to ="/shop">
            <button className="Btn">shop now</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
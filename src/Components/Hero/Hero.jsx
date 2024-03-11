import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Where Every Meal Matters</h1>
        <p>
          Empower change with every meal - share hope through food donations.
        </p>
        <button className="btn">
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Explore more <img src={dark_arrow} alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;

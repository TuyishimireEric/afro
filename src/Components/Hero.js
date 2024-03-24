import React, { useEffect, useState } from "react";
import Doctor from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Mental Health comes first</p>
          <h2 className="text-title">
          A Team United for Mental Wellness in Rwanda
          </h2>
          <p className="text-descritpion">
          We are Afro-Synergy, a passionate team united by a common cause: revolutionizing mental health awareness and support for Rwandan youth. This website is a window into our journey, a story of dedication, education, and building a brighter future.
          </p>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;

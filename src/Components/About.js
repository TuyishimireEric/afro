import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Afro-Synergy is a think tank, but we're more than just ideas. We're educators, advocates, and a bridge connecting youth to the resources they need to thrive. Through this website, you'll discover:
        </p>


        <SolutionStep
          title="Our mission"
          description="to empower young people with knowledge and dismantle the stigma surrounding mental health.."
        />

        <SolutionStep
          title="Our journey"
          description=" how Afro-Synergy came to be and the challenges we've overcome."
        />

        <SolutionStep
          title="How we tackle the problem"
          description=" innovative methods for educating both youth and those who support them."
        />
      </div>
    </div>
  );
}

export default About;

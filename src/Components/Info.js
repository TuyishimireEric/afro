import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our solution</span>
        </h3>
        <p className="info-description">
        We're educators, advocates, and a bridge connecting youth to the resources they need to thrive. 
        Through this website, you'll discover:
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Art Therapy Programs"
          description="Implement art therapy programs aimed at providing therapeutic support for individuals struggling with mental health challenges, using creative expression as a tool for healing and self-discovery."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Resource Hub"
          description="Serve as a comprehensive resource hub for mental health information, offering articles, videos, and resources that empower individuals to learn more about mental health, access support services, and find inspiration through art and culture."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Advocacy Campaigns"
          description="Launch advocacy campaigns that advocate for policy changes, increased funding, and improved access to mental health services, leveraging the power of art and design to amplify voices and drive social change."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;

import React from "react";
import DoctorCard from "./DoctorCard";
import denis from "../Assets/dennisss.png"
import tracy from "../Assets/tracyx.png"
import lilala from "../Assets/lilalare.png"
import james from  "../Assets/james.png"
import mac from "../Assets/mac.png"
import paula from "../Assets/paulass.png"
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={paula}
          name="Paula Glory"
          title="General Surgeons"
          stars="4.9"
          reviews="12"
        />
        <DoctorCard
          img={denis}
          name="Ntwali Dennis"
          title="content creator"
          stars="4.8"
          reviews="7"
        />
        <DoctorCard
          img={james}
          name="Mukunzi Ndahiro James"
          title="software engineer"
          stars="4.7"
          reviews="4"
        />
        <DoctorCard
          img={tracy}
          name="Tracy Brown"
          title="Hematologists"
          stars="4.8"
          reviews="5"
        />
          <DoctorCard
          img={mac}
          name="Mac Arthur Rutagengwa"
          title="General Surgeons"
          stars="4.9"
          reviews="18"
        />
          <DoctorCard
          img={lilala}
          name="Lilala Runiga Jemima"
          title="General Surgeons"
          stars="4.9"
          reviews="18"
        />
      </div>
    </div>
  );
}

export default Doctors;

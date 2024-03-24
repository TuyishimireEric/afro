import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import denis from "../Assets/Denis.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={denis} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Our Problem Statement</span>
        </h3>
        <p className="ba-description">
        The Rwanda Mental Health Survey (R.M.H.S.),  in 2023, indicates that rates of mental health disorders in young people in Rwanda range from 10.2% to almost 20%. According to this R.M.H.S. data, a significant number of Rwandans between the ages of 14 and 25 suffer from psychological conditions such as trauma, anxiety, and depression. In Rwanda, individuals suffering from mental diseases may not actively seek assistance due to stigma and it being inaccess.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Seek Support
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Set Boundaries
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Practice Mindfulness
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Prioritize Self-Care
        </p>

      </div>
    </div>
  );
}

export default BookAppointment;

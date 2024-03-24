import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
// import Challenge from "../Components/Challenge";

function Home() {
  return (
    <div className="home-section "  style={{ backgroundColor: "rgb(239,231,221)" }}>
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      {/* <Challenge /> */}
      <Footer />
    </div>
  );
}

export default Home;

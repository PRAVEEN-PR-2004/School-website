import React, { useEffect } from "react";
import { CITY } from "../components/City";
import { useParams } from "react-router-dom";
import Linkcom from "../components/Linkcom";
import { Container } from "react-bootstrap";

import Footer from "../components/Footer";
import Address from "../components/Address";

const Contact = () => {
  const { city } = useParams();
  const contactcity = CITY.find((cities) => cities.scity === city);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contactcity) {
    return <p>City not found. Please check the URL.</p>;
  }

  return (
    <>
      <Linkcom>{contactcity.scity}</Linkcom>

      {/* Image and Title Section */}
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src={contactcity.bimg}
          alt="Holidays Banner"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover", // Ensures the image covers the container without distortion
            maxHeight: "500px", // Set a max height for large screens
          }}
        />
        {/* Title Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centers the text
            color: "white", // Text color
            fontSize: "2.5rem", // Adjust as per your need
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: adds a slight background to make text more readable
            padding: "10px 20px", // Optional: adds some padding around the text
          }}
        >
          {contactcity.scity} {/* Displays the title from CITY.js */}
        </div>
      </div>

      <Container style={{ marginTop: "3%" }}>
        <p style={{ fontSize: "30px" }}>{contactcity.head1}</p>
        <p style={{ fontSize: "15px", color: "gray" }}>{contactcity.para1}</p>
        <p style={{ fontSize: "30px" }}>{contactcity.head2}</p>
        <p style={{ fontSize: "15px", color: "gray" }}>{contactcity.para2}</p>
      </Container>

      <Address />
      <Footer />
    </>
  );
};

export default Contact;

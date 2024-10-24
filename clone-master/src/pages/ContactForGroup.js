import React, { useEffect } from "react";
import { SCHOOL_GROUPS } from "../components/Group.js"; // Update the component for School Groups
import { useParams } from "react-router-dom";
import Linkcom from "../components/Linkcom";
import { Container } from "react-bootstrap";

import Footer from "../components/Footer";
import Address from "../components/Address";

const ContactForGroup = () => {
  const { group } = useParams();
  const contactGroup = SCHOOL_GROUPS.find((groups) => groups.sgroup === group);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contactGroup) {
    return <p>Group not found. Please check the URL.</p>;
  }

  return (
    <>
      <Linkcom>{contactGroup.sgroup}</Linkcom>

      {/* Image and Title Section */}
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src={contactGroup.bimg}
          alt="School Group Banner"
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
            color: "black", // Text color
            fontSize: "2.5rem", // Default font size
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 10, // Adds z-index to bring the text above other elements
            padding: "10px 20px", // Optional: adds some padding around the text
          }}
        >
          {contactGroup.sgroup} {/* Displays the title from SCHOOL_GROUPS.js */}
        </div>
      </div>

      <Container style={{ marginTop: "3%" }}>
        <p style={{ fontSize: "30px" }}>{contactGroup.head1}</p>
        <p style={{ fontSize: "15px", color: "gray" }}>{contactGroup.para1}</p>
        <p style={{ fontSize: "30px" }}>{contactGroup.head2}</p>
        <p style={{ fontSize: "15px", color: "gray" }}>{contactGroup.para2}</p>
      </Container>

      <Address />
      <Footer />
    </>
  );
};

export default ContactForGroup;

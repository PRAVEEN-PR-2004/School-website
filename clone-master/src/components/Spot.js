import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import "./Spot.css";
const Spot = () => {
  return (
    <div>
      <Container className="mt-5">
        <h4 className="heading">School Overview</h4>
        <Row className="mt-3 mb-2">
          <Col lg={8} md={12} sm={12} className="mb-4">
            <div className="overlay-container">
              <img
                src={require("../assets/students2.jpg")}
                alt="SchoolWebsite"
                className="img-fluid pack_img"
                style={{ maxWidth: "100vw", height: "100%" }}
              />
              <div className="overlay-content">
                <span className="thead">Student Strength</span>
                <br></br>
                <br></br>
                <span className="tbox">1500 STUDENTS</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className="overlay-container">
              <img
                src={require("../assets/schoolteacher2.jpg")}
                alt="SchoolWebsite"
                className="img-fluid pack_img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="overlay-content">
                <span className="thead">Teacher Strength</span>
                <br></br>
                <br></br>
                <span className="tbox">80 TEACHERS</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className="overlay-container">
              <img
                src={require("../assets/classroom.webp")}
                alt="SchoolWebsite"
                className="img-fluid pack_img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="overlay-content">
                <span className="thead">Total Classes</span>
                <br></br>
                <br></br>
                <span className="tbox">60 CLASSES</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className="overlay-container">
              <img
                src={require("../assets/schoollab.jpg")}
                alt="SchoolWebsite"
                className="img-fluid pack_img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="overlay-content">
                <span className="thead">Special Labs</span>
                <br></br>
                <br></br>
                <span className="tbox">5 LABS</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            <div className="overlay-container">
              <img
                src={require("../assets/schoolplayground.jpg")}
                alt="SchoolWebsite"
                className="img-fluid pack_img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="overlay-content">
                <span className="thead">Playgrounds</span>
                <br></br>
                <br></br>
                <span className="tbox">3 GROUNDS</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Spot;

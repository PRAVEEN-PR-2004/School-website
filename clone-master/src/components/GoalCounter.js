import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

const GoalCounter = () => {
  const [startCounter, setStartCounter] = useState(false);

  // Function to handle scroll and start counter
  const handleScroll = () => {
    const element = document.getElementById("goal-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setStartCounter(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      id="goal-section"
      className="text-center my-5"
      style={{ backgroundColor: "#ffeb3b" }}
    >
      <h2 className="mb-4" style={{ color: "green" }}>
        Our Goal is to Inspire
      </h2>
      <Row>
        <Col>
          <p>More Than</p>
          <h1 style={{ color: "#00f" }}>
            {startCounter ? <CountUp end={1000} duration={5} /> : 0}+{" "}
            {/* Set your desired value here */}
          </h1>
          <p>Childrens</p>
        </Col>
        <Col>
          <p>In the Next</p>
          <h1 style={{ color: "#00f" }}>
            {startCounter ? <CountUp end={365} duration={5} /> : 0}{" "}
            {/* Set your desired value here */}
          </h1>
          <p>Days</p>
        </Col>
        <Col>
          <p>With a</p>
          <h1 style={{ color: "#00f" }}>
            {startCounter ? <CountUp end={50} duration={5} /> : 0}{" "}
            {/* Set your desired value here */}
          </h1>
          <p>Teachers</p>
        </Col>
        <Col>
          <p>By becoming the</p>
          <h1 style={{ color: "#00f" }}>
            {startCounter ? <CountUp end={1} duration={5} /> : 0}{" "}
            {/* Set your desired value here */}
          </h1>
          <p>No.1 School</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GoalCounter;

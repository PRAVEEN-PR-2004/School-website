import React from "react";
import { Container } from "react-bootstrap";

const Content = () => {
  return (
    <Container className="mt-5 mb-5">
      <h3 style={{ marginBottom: "25px" }}>Welcome to ABC School</h3>
      {/* Bigger paragraph */}
      <p style={{ fontSize: "smaller", color: "#aba5a5" }}>
        ABC School, established in 1990, is a renowned institution known for
        providing a strong academic foundation and promoting holistic
        development. For over three decades, we have consistently fostered an
        environment where students are encouraged to explore their potential,
        both inside and outside the classroom. With a dedicated faculty, modern
        facilities, and a diverse curriculum, we aim to create well-rounded
        individuals who excel in academics, leadership, sports, and the arts.
        Our commitment to quality education ensures that students not only gain
        knowledge but also develop critical thinking, creativity, and a passion
        for lifelong learning.
      </p>
      {/* Smaller paragraph */}
      <p style={{ fontSize: "smaller", color: "#aba5a5" }}>
        Join us at ABC School, where we nurture future leaders and provide a
        nurturing space for growth and success.
      </p>
    </Container>
  );
};

export default Content;

import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaChalkboardTeacher, FaBookReader, FaSchool } from "react-icons/fa"; // Changed icons to fit school theme
import "./TextCard.css";

const ThreeCardsRow = () => {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        {/* First Card - Student Achievements */}
        <Col md={4} sm={12} className="mb-3">
          <Card className="h-100">
            <FaChalkboardTeacher
              className="mx-auto mt-3 icon-yellow"
              size={100}
            />
            <Card.Body>
              <Card.Title className="text-center head">10,000+</Card.Title>
              <Card.Title className="text-center head">
                Student Achievements
              </Card.Title>
              <Card.Text className="text-center para">
                Our students have excelled in academic, sports, and
                extracurricular activities with numerous accolades.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card - School Facilities */}
        <Col md={4} sm={12} className="mb-3">
          <Card className="h-100">
            <FaSchool className="mx-auto mt-3 icon-yellow" size={100} />
            <Card.Body>
              <Card.Title className="text-center head">
                State-of-the-Art
              </Card.Title>
              <Card.Title className="text-center head">Facilities</Card.Title>
              <Card.Text className="text-center para">
                Our school is equipped with modern classrooms, science labs, and
                sports complexes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card - Academic Programs */}
        <Col md={4} sm={12} className="mb-3">
          <Card className="h-100">
            <FaBookReader className="mx-auto mt-3 icon-yellow" size={100} />
            <Card.Body>
              <Card.Title className="text-center head">Innovative</Card.Title>
              <Card.Title className="text-center head">
                Academic Programs
              </Card.Title>
              <Card.Text className="text-center para">
                We offer a wide range of academic programs designed to nurture
                the intellectual and creative growth of students.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeCardsRow;

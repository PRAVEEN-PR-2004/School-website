import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Linkcom = ({ children }) => {
  return (
    <>
      <hr style={{ color: " rgb(127, 126, 126)" }}></hr>
      <Container>
        <Nav>
          <Nav.Item>
            <Nav.Link
              href="/"
              style={{ color: "black", fontSize: "smaller", fontWeight: "600" }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="disabled"
              style={{ fontSize: "smaller" }}
              disabled
            >
              {children}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
};

export default Linkcom;

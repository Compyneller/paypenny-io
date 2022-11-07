import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../../Assets/Feed-rafiki.svg";
const Section4 = () => {
  return (
    <div
      className="py-5 text-light text-center"
      style={{ background: "#0e1538" }}>
      <Container>
        <Row className="g-3">
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center">
            <h1>Try the mobile app!</h1>
            <h5>All PaypennyX in the palm of the hand</h5>
            <p>
              Buy and sell bitcoins wherever you are, follow the market and
              create your alerts to be aware of all price evolutions in real
              time. Access your transactions history and manage precisely your
              positions.
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;

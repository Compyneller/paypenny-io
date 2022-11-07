import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../../Assets/undraw_connected_world_wuay.svg";
const Section3 = () => {
  return (
    <div className="text-light" style={{ background: "#000" }}>
      <Container className="py-5">
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <img src={image} alt="" className="w-100" />
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center">
            <h1>Based in Canada, UK and Europe</h1>{" "}
            <h5>Services complying with the Country’s Regulations</h5>
            <p>
              PaypennyX is a cryptocurrency platform since 2022. PaypennyX is
              registered under the government of Canada, UK & Europe.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;

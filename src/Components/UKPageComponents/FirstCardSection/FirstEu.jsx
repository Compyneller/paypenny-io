import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../../Assets/datesec1-modified.png";
import "./Wallet.scss";

const FirstEu = () => {
  return (
    <Container className="text-light text-center">
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <img
            src={image}
            alt=""
            className="w-100"
            style={{ mixBlendMode: "lighten" }}
          />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center">
          <h1 className="my-1">Join the Pioneering Bitcoin Exchange</h1>
          <h5 className="my-3">Defending Bitcoin since 2020</h5>
          <p>
            PaypennyX has been offering a BTC marketplace since the early days
            of Bitcoin. <br />
            <br />
            We practice cold storage of 99% of deposited Bitcoins.
            <br />
            <br />
            We offer deposit by bank transfer in €. Trading on PaypennyX is one
            of the most valuable things you can do online.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstEu;

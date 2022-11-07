import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Reason2.scss";
import image from "../../../Assets/Copyright-rafiki.png";
const Second = () => {
  return (
    <div className="text-light text-center" style={{ background: "#0e1538" }}>
      {/* <div className="container">
        <h1>Benefits of Using Paypenny</h1>

        <br />
        <br />
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="blockCard2">
              <img
                src="https://img.icons8.com/material-outlined/2x/lock--v2.gif"
                alt=""
              />
              <h5>Safe & Secure</h5>
              <p>
                Every transaction is covered with secure transmission technology
                which makes your transaction safe & secure
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="blockCard2">
              <img
                src="https://img.icons8.com/ios-glyphs/2x/double-right--v2.gif"
                alt=""
              />
              <h5>Instant Transfer</h5>
              <p>
                Sit back, breathe & relax Paypenny covers thousands of
                transactions in a minute. Now, send Money instantly to your
                loved ones!
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="blockCard2">
              <img
                src="https://img.icons8.com/ios/2x/conference-call--v2.gif"
                alt=""
              />
              <h5>24/7 Customer Support</h5>
              <p>
                The Customer Support Team of Paypenny is no less than avengers!
                They are round the clock available to listen to your queries.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="blockCard2">
              <img
                src="https://img.icons8.com/ios/2x/mailbox-closed-flag-down--v2.gif"
                alt=""
              />
              <h5>Send Money Everyday</h5>
              <p>
                Paypenny provides its services 7 days a week. That's
                incomparable, right? Enjoy our services every day!
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="blockCard2">
              <img
                src="https://img.icons8.com/ios/2x/butterfly--v2.gif"
                alt=""
              />
              <h5>Smooth UI</h5>
              <p>
                The smooth user interface, the bright theme, and easy-to-use
                features make the Paypenny application stand out in the crowd!
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <Container>
        <Row className="g-3">
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center">
            <h1>Lowest Fees on the Market</h1>
            <h5>0% fee on all maker orders</h5>
            <p>
              It is possible to trade without paying any fees. Not only you no
              longer pay fees, but you also receive a 0.10% cashback directly on
              your PaypennyX account for each of your trades. Taker orders are
              charged with a 0% fee.
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

export default Second;

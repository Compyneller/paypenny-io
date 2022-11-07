import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Wallet.scss";
import image from "../../../Assets/datesec1-modified.png";
const First = () => {
  return (
    <div className="WalletMainContainer">
      {/* <div className="container">
        <h1>What makes us stand out in the market?</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/purse-front-view--v2.gif"
                  alt=""
                />
                <h5>Super Wallet</h5>
                <br />
                <p>
                  Paypenny present’s Super wallet where you can add as low as
                  GBP 1 and as high as £ 10,000 as many times as you want in a
                  single day!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/bank-card-front-side--v2.gif"
                  alt=""
                />
                <h5>No Transaction Fees</h5>
                <br />
                <p>
                  Say Goodbye to the high transaction fee as Paypenny incurs
                  zero fees with no hidden charges or additional charges on your
                  transactions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/pastel-glyph/2x/trust--v2.gif"
                  alt=""
                />
                <h5>Highest Exchange Rates Guaranteed</h5>
                <p>
                  Paypenny provides you with the highest exchange interest rates
                  in the industry. Send Money to India with the flexible
                  exchange rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Container>
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
              We offer deposit by bank transfer in £. Trading on PaypennyX is
              one of the most valuable things you can do online
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default First;

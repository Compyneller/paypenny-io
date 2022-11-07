import React from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./Blog.scss";
import CryptoFuture from "./CryptoFuture";
import FlashLoans from "./FlashLoans";
import Myth from "./Myth";
import NavBar from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <>
      <NavBar />
      <div className="blogContainer">
        <div className="blogBg"></div>
        <div className="BlogCarousel">
          <Container className="mx-auto">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item className="blogCarouselItem">
                <div className="row g-0 ">
                  <div
                    className="col-12 col-lg-6 text-light d-flex align-items-center justify-content-center flex-column text-center"
                    style={{
                      background: "rgba(5, 20, 34, 0.682)",
                      minHeight: "50vh",
                    }}>
                    <h1>
                      <b>BLOG</b>
                    </h1>
                    <p>
                      <i>
                        Bitcoin | crypto | cryptocurrency | crypto market 2022 |
                        blockchain technology | digital money | Ethereum value |
                        bitcoin value | cryptocurrency in India | cryptocurrency
                        mining | cryptocurrency future | cryptocurrency{" "}
                      </i>
                    </p>
                  </div>
                  <div className="col-12 col-lg-6  text-light "></div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      </div>
      <div className="w-100 bg-light">
        <Container className="bg-light py-5">
          <Row className="g-3">
            <Col xs={12} sm={12} md={6} lg={8}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/future">
                <Card>
                  <Card.Body>
                    <img
                      src="https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                      alt=""
                      className="w-100"
                    />
                    <br />
                    <br />
                    <h5>
                      <b>Crypto the future?</b>
                    </h5>
                    <p>
                      Cryptocurrency future - How the COVID-19 pandemic has
                      turned the world upside down, we have already seen! The
                      financial sector got affected tremendously, whether it was
                      the stock market, commodities market, or cryptocurrency
                      market. In that time of such calamity, Bitcoin - the most
                      popular currency - became the highly valued asset of the
                      2020 year.
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/flash">
                <Card>
                  <Card.Body>
                    <img
                      src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                      className="w-100"
                    />
                    <br />
                    <br />
                    <h5>
                      <b>What are Flash Loans? Complete Guide</b>
                    </h5>
                    <p>
                      You might have heard about flash loans if you’re trading
                      in cryptocurrency. Flash loans are established to buy &
                      sell different types of cryptocurrency smoothly on an
                      exchange for crypto traders. Primarily, flash loans were
                      introduced in 2018 on the DeFi and joined the Ethereum
                      network in January 2020.{" "}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={12}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/myth">
                <Card>
                  <Card.Body>
                    <Row className="g-3">
                      <Col xs={12} sm={12} md={4} lg={4}>
                        <img
                          src="https://images.unsplash.com/photo-1629339938591-ec5e73815e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                          alt=""
                          className="w-100"
                        />
                      </Col>
                      <Col
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        className="d-flex flex-column justify-content-center">
                        <h5>
                          <b>Top Cryptocurrency Myths</b>
                        </h5>
                        <p>
                          Cryptocurrencies have become a trending topic among
                          every age group. Since its launch in 2008, it is
                          rapidly growing in the digital world. Due to the
                          volatile nature of cryptocurrency, people strongly
                          believe the myths. Cryptocurrency is vast & is
                          somewhat obscure in nature and difficult to understand
                          in one go-this confusion brings rumors & myths
                          regarding these digital currencies.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <CryptoFuture />
      <FlashLoans />
      <Myth /> */}
    </>
  );
};

export default Blogs;

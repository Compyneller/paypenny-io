import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";

const Myth = () => {
  return (
    <>
      <NavBar />
      <div className="mainBlogContainer bg-light">
        <div className="blogContainer">
          <div className="blogBg"></div>
          <div className="BlogCarousel">
            <Container className="mx-auto">
              <div className="MythItems">
                <div className="row g-0 ">
                  <div
                    className="col-12 col-lg-6 text-light d-flex align-items-center justify-content-center flex-column text-center"
                    style={{
                      background: "rgba(5, 20, 34, 0.682)",
                      minHeight: "50vh",
                    }}>
                    <h1>
                      <b>Top Cryptocurrency Myths</b>
                    </h1>
                  </div>
                  <div className="col-12 col-lg-6  text-light "></div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="w-100 py-5 text-dark">
          <Container>
            <p>
              Cryptocurrencies have become a trending topic among every age
              group. Since its launch in 2008, it is rapidly growing in the
              digital world. Due to the volatile nature of cryptocurrency,
              people strongly believe the myths. Cryptocurrency is vast & is
              somewhat obscure in nature and difficult to understand in one
              go-this confusion brings rumors & myths regarding these digital
              currencies. <br />
              <br />
              After analyzing on the internet I have found the top 5 biggest
              myths related to cryptocurrencies. So let me make it a clear
              description for each myth so that you can decide whether it is
              true or just rumored with no proven facts! Check out the complete
              list:
            </p>
          </Container>
        </div>
        <Container className="py-5">
          <Row className="g-3">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h5>
                <b>1- Crypto is a scam</b>
              </h5>
              <p>
                Cryptocurrencies have become an accepted means of exchange at
                many retailers and merchants. People are accepting them in
                personal transactions, and governments are working to find ways
                to regulate them. Most digital currencies have no programming,
                code, or malicious artificial intent that works to take money
                from you. <br />
                <br />
                However, people have created scams for you out of your
                cryptocurrency or money. For example, there have been many
                initial coin offerings—unregulated fundraising for new
                cryptocurrency ventures—that turned out to be scams. In other
                cryptocurrency scams, someone might try to get you to accept
                unverified transactions, or call you pretending to be government
                officials and ask you to pay your debts in cryptocurrency.
                <br />
                <br />
                While it's impossible to eliminate the chance that you will be
                the victim of a scam, knowledge and awareness can help you
                reduce the chances of it happening to you.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h5>
                <b>2- Crypto is just a hype</b>
              </h5>
              <p>
                At one time, computers, the internet, and email were considered
                interesting only to a small crowd of tech fans—they are now
                staples of modern personal and work life. It is tough to predict
                where cryptocurrencies will be in the next few decades; however,
                the technology they introduced and the products they inspired
                will likely continue to be developed and refined. <br />
                Decentralized finance applications are taking shape, gathering
                the interest of financial institutions and consumers.
                Governments are exploring ways to implement legally-recognized
                cryptocurrencies pegged to an asset that is more stable and some
                businesses are investing heavily in Bitcoin and altcoins. <br />
                Tech giants are researching ways to fuse the real and digital
                worlds, using blockchain technology as a building block for this
                fusion with non-fungible tokens created for anything imaginable.
                Tokens can be created for any asset and value assigned to them;
                the virtual and real worlds are being directed onto a collision
                course and cryptocurrency is likely to be involved
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h5>
                <b>3- Crypto will replace fiat currency</b>
              </h5>
              <p>
                Cryptocurrencies are relatively new, while fiat currencies have
                been around for centuries. China is generally thought to have
                issued the first fiat currency around the year 1,000 CE. Many
                developed countries use this type of currency. For
                cryptocurrency to replace fiat currency, people would have to
                adopt it en masse over the money they are used to and can
                understand. However, once value and purchasing power is
                established, it is possible that it could happen. If merchants
                began posting prices in cryptocurrency and more people began
                using it to purchase goods and services, it might start a trend.{" "}
                <br />
                However, governments and officials will not let go of fiat
                currency lightly because of the established system of controls
                in place for collecting taxes and funding government-sponsored
                programs and services. Without the collection of taxes, social
                programs that people depend upon will disappear, and other
                government funding could dry up. <br />
                Moreover, there would be no way to control inflation through
                monetary policies due to the decentralized nature of
                cryptocurrency. The modern tools used by central banks to combat
                inflation & unemployment while boosting economic growth have
                taken over 100 years to develop. The complete decentralization
                of money through cryptocurrency would have unknown effects on a
                country's economy. Because blockchain technology and
                cryptocurrency do not have any built-in tools for influencing
                inflation, employment, or economic growth, new monetary policies
                and tools would need to be created.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h5>
                <b>4- Crypto is not secure</b>
              </h5>
              <p>
                The key technology behind cryptocurrency is the blockchain. A
                blockchain is a distributed database secured with encryption
                techniques and technology that is very difficult to break. As
                transactions are entered into the blocks in the blockchain,
                previous transaction information is recorded in the new blocks
                and encrypted. <br />
                The chain continues to build on each previous block, and a
                community of automated verifiers has to agree that the
                information recorded in the transactions is valid. The
                encryption, linked blocks, and consensus mechanisms make it
                nearly impossible to change information in the blockchain to
                "steal" cryptocurrency. <br />
                The weakness lies in how cryptocurrency is accessed and stored,
                such as in cryptocurrency wallets or centralized exchanges that
                facilitate transactions. It is entirely possible to send
                cryptocurrency from one user to another without worry, but the
                platforms and software used to store and access it can be hacked
                or tampered with. <br />
                There are some very safe methods you can use to ensure your
                cryptocurrency is safe. For instance, you can keep your crypto
                asset keys off the exchanges and in cold storage. When you want
                to use it, transfer only the amount you want to use to your hot
                wallet through a secure, wired connection on a non-mobile device
                like a personal computer.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h5>
                <b>5- Crypto is illegal</b>
              </h5>
              <p>
                One of the oldest and most extensive myths about digital
                currencies is that they are most commonly used for illegal
                activities. While it's true that digital currencies have been
                used by individuals, business investors as well as by fraudsters
                & hackers alliance and history is showing the same scenario
                wherever money is involved. <br /> <br />
                Most cryptocurrency transactions are conducted with legitimate
                and legal intentions. It's important to note that governments
                and the international community are cracking down on
                cryptocurrency used by criminals and organized crime. Many
                countries have adopted cryptocurrency anti-money laundering and
                countering the financing of terrorism measures; agencies and
                teams have been established to combat the use of
                cryptocurrencies in these illegal activities.
              </p>
            </Col>
          </Row>
          <p>
            Written By <br />
            Pragya <br />
            Paypenny
          </p>
        </Container>
      </div>
    </>
  );
};

export default Myth;

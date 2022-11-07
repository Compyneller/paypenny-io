import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";

const FlashLoans = () => {
  return (
    <>
      <NavBar />
      <div className="mainBlogContainer bg-light">
        <div className="blogContainer">
          <div className="blogBg"></div>
          <div className="BlogCarousel">
            <Container className="mx-auto">
              <div className="FlashLoanItem">
                <div className="row g-0 ">
                  <div
                    className="col-12 col-lg-6 text-light d-flex align-items-center justify-content-center flex-column text-center"
                    style={{
                      background: "rgba(5, 20, 34, 0.682)",
                      minHeight: "50vh",
                    }}>
                    <h1>
                      <b>What are Flash Loans? Complete Guide</b>
                    </h1>
                  </div>
                  <div className="col-12 col-lg-6  text-light "></div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="w-100 pt-5 text-dark">
          <Container>
            <p>
              You might have heard about flash loans if you’re trading in
              cryptocurrency. Flash loans are established to buy & sell
              different types of cryptocurrency smoothly on an exchange for
              crypto traders. Primarily, flash loans were introduced in 2018 on
              the DeFi and joined the Ethereum network in January 2020. Flash
              loans are very popular these days among investors. In this
              article, I will tell you about flash loans in detail. Does this
              article have the answers to all your questions like how flash
              loans work? Is it safe? Pros & Cons? Flash loan attack? And many
              more relevant topics. Read the full article for the complete guide
              on flash loans. So, without wasting time let's get started.
            </p>
          </Container>
        </div>
        <Container className="pb-3">
          <h1>What is a Flash Loan?</h1>
          <p>
            A Flash loan is a digital loan accessible on a decentralized finance
            network, based on some protocols & secured by a blockchain network
            available for crypto investors & traders. It is an uncollateralized
            loan provided by a lender to a borrower by utilizing a digitally
            facilitated agreement, written in code language on blockchain
            technology (smart contract). The Flash loans work between the two
            parties (lender & borrower) and it doesn't involve third parties.{" "}
            <br />
            <br />
            Flash loans arrived on the Ethereum network in January 2020 & began
            through Aave, a platform that runs as a decentralized non-custodial
            liquidity market protocol for depositors & borrowers. Aave platform
            had already issued $4 billion approx in flash loans by June 2021.{" "}
            <br />
            <br />
            Flash loans are advantageous in some ways as it provides the loan
            instantly to the borrower because it encapsulates the entire
            transaction with the ability to arbitrage, an investment strategy to
            buy & sell the same assets in different markets to get the advantage
            of different prices. It means that if the trader doesn’t make a
            profit from the loan, the transactions get reversed & funds get
            returned to the lender, all this happens in a single transaction
            block.
          </p>
        </Container>
        <div
          className="w-100 py-5 text-light"
          style={{ background: "#051422" }}>
          <Container>
            <h1>How do Flash Loans Work?</h1>
            <p>
              Flash loans use Aave protocols with a fee of 0.09% and a smart
              contract to provide the borrower a loan, if it makes a profit then
              the borrower needs to pay a fee to Defi protocols and if it is
              unprofitable then the funds return to the lender or provider of
              the flash loan. BasItunds like an easy, low-low risk to borrow
              funds in the crypto market. Flash loans run on the smart contract
              on the DeFi network, it constructs a request that acts as a
              contract on a blockchain to borrow funds to earn profit. The smart
              contract can be programmed by a developer as it requires writing
              code, although you can use several tools available online to
              simplify the smart contracts on the blockchain.
            </p>
          </Container>
        </div>
        <Container className="py-5">
          <h1>How safe are these flash loans?</h1>
          <p>
            As we have already known, flash loans work on smart contracts but
            are they protected from hackers? Well, the answer to this question
            is quite familiar because smart contracts are not always written
            correctly and the data received is insecure or inaccurate so, it
            involves a risk of hacking. <br />
            <br />
            There are already many attacks that have been recorded previously on
            flash loans which result in the loss of millions of dollars for the
            lenders. Hackers never leave an opportunity to perform malicious
            activity on the DeFi network. However, most of the people in the
            crypto market believe that upgrading & enhancing the technology can
            prevent it from malicious activities as it is a unique technology.
          </p>
        </Container>
        <div
          className="w-100 py-5 text-light"
          style={{ background: "#051422" }}>
          <Container>
            <h1>Why would I want to use a flash loan?</h1>
            <p>
              Flash loans help investors to gain profit without putting their
              own money at risk. It is a potential way to take advantage of
              instant loans with fewer resources. There are several factors
              responsible to use flash loan and they are as follow- <br />
              <br />
              Arbitrage: The most popular use of flash loans is arbitrage.
              Traders want to earn by spotting price discrepancies across
              several exchanges in different types of the crypto market. The
              trader can use flash loans and a separate smart contract to
              purchase an exchange at lower prices and subsequently sell them at
              different exchanges to generate revenue from higher prices. <br />
              <br />
              Low transaction fee: Due to flash loans, the number of
              transactions is combined into a single transaction to reduce the
              transaction fee.
            </p>
            <h3>Pros & Cons of Flash Loans</h3>
            <p>
              The crypto market is known for volatility and it involves risk.
              Flash loans are a new technology specially built for traders to
              get profit from this rapid loan. Below are the summarized pros of
              the flash loan.
            </p>
            <Row className="g-3">
              <Col xs={12} sm={12} md={6} lg={6}>
                <h5>
                  <b>Pros of the Flash loan-</b>
                </h5>
                <li>Instant loan.</li>
                <li>Low transaction fee.</li>
                <li>Single transaction block.</li>
                <li>No collateral swap is required.</li>
                <li>
                  We have already seen the advantages of flash loans and now
                  let’s have a look at the disadvantages of it.{" "}
                </li>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <h5>
                  <b>Cons of the flash loan-</b>
                </h5>
                <li>Developing technology.</li>
                <li>Attackers can hack the system.</li>
                <li>Exploitation.</li>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="py-5">
          <h1>What if I don't pay back a flash loan?</h1>
          <p>
            The flash loan runs on the smart contract system. If the trader gets
            the profit from the flash loan then the lender will get its loan
            repaid and the transaction will be called complete. However, if in
            any case, the flash loan trade doesn’t give the trader profit then
            the smart contract reverses the entire transaction and the flash
            loan will get back to the lender. <br />
            <br />
            All this can be done with the help of smart contracts between
            lenders & traders. The lending mechanism of smart contracts almost
            reduces the risk for the lender and reverses the whole transaction
            if the borrower doesn't repay the loan to the lender.
          </p>
        </Container>
        <div
          className="w-100 py-5 text-light"
          style={{ background: "#051422" }}>
          <Container>
            <h1>What is a flash loan attack?</h1>
            <p>
              A flash loan attack is the manipulation of the intelligent
              contract security by the attacker during the loan borrowing. An
              attacker usually borrows a lot of funds from different lenders in
              which collaterals are not required and then the attacker
              manipulates the price of the crypto asset on one exchange and
              instantly resells it on another one. <br />
              <br />
              Technically, the process is quite complex and involves multiple
              accounts, high risk & so many steps to steal the funds. <br />
              Are flash loans legal?
              <br />
              If we talk about the current scenario in terms of the crypto
              market then yes flash loans are legal. Because the crypto market
              depends on the blockchain network and flash loans facilitate the
              buying & selling for traders with the use of smart contracts.{" "}
              <br />
              <br />
              But if we talk about the future, the crypto market will be more
              regulated & secure and we cannot predict anything now.
            </p>
          </Container>
        </div>
        <Container className="py-5">
          <h1>Conclusion</h1>
          <p>
            Flash loans are popular among investors in the crypto market
            exchange. All thanks to the smart contract mechanism that makes the
            usage of the flash loans easy & covers the entire transaction in a
            single block with a comparatively low fee. <br />
            <br />
            The crypto market is vast & volatile and to enter the cryptocurrency
            world, you need to understand everything from the scratch. <br />
            <br />
            Written by <br />
            <br />
            Pragya Pandey <br />
            <br />
            Paypenny
          </p>
        </Container>
      </div>
    </>
  );
};

export default FlashLoans;

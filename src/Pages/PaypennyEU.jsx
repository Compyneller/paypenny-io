import React from "react";
import First from "../Components/UKPageComponents/FirstCardSection/First";
import Second from "../Components/UKPageComponents/SecondCardSection/Second";
import UKHero from "../Components/UKPageComponents/UKHero/UKHero";
import video from "../Assets/futuristic-ui-hud-head-up-display-analytic-screen-2021-11-01-09-02-14-utc.mp4";
import NavBarUk from "../Components/NavBarUk/NavBarUk";
import Section3 from "../Components/UKPageComponents/SecondCardSection/Section3";
import Section4 from "../Components/UKPageComponents/SecondCardSection/Section4";
import Qr from "../Components/Qr/Qr";
import MoneySubFooter from "../Components/MoneySubFooter/MoneySubFooter";
import Footer from "../Components/Footer/Footer";
import FirstEu from "../Components/UKPageComponents/FirstCardSection/FirstEu";

const PaypennyEU = () => {
  const heading = "Trade Crypto worldwide with Paypenny X. ";

  return (
    <div>
      <NavBarUk />
      <UKHero video={video} heading={heading} />

      <FirstEu />
      <Second />
      <Section3 />
      <Section4 />
      <Qr />
      <div className="divider container"></div>
      {/* <MoneySubFooter /> */}
      {/* <div className="divider container"></div> */}
      <Footer
        link="contactUs"
        linkTC="tc"
        linkPP="privacypolicy-uk"
        text="Trackon Canada private limited is registered in England and Wales with registration number 13791797."
      />
    </div>
  );
};

export default PaypennyEU;

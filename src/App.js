import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import TC from "./Pages/TC";
import ContactUs from "./Pages/ContactUs";
import Earn from "./Pages/Earn";
import CustomerJourney from "./Pages/CustomerJourney";
import PaypennyUK from "./Pages/PaypennyUK";
import PaypennyEU from "./Pages/PaypennyEU";
import NavBar from "./Components/NavBar/NavBar";
import SubFooter from "./Components/SubFooter/SubFooter";
import Qr from "./Components/Qr/Qr";
import Blogs from "./Pages/Blog/Blogs";
import Blog2 from "./Pages/Blog2/Blog2";
import MoneySubFooter from "./Components/MoneySubFooter/MoneySubFooter";
import ContactUsUk from "./Pages/ContactUsUk";
import TCUk from "./Pages/TCUk";
import TCUk2 from "./Pages/TCUk2";
import PrivacyPolicyUk from "./Pages/PrivacyPolicyUk";
import CryptoFuture from "./Pages/Blog/CryptoFuture";
import FlashLoans from "./Pages/Blog/FlashLoans";
import Myth from "./Pages/Blog/Myth";

function App() {
  console.log(window.location.href);
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/privacypolicy-uk" element={<PrivacyPolicyUk />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/tc-uk" element={<TCUk2 />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contactusUk" element={<ContactUsUk />} />
          <Route path="/earns" element={<Earn />} />
          <Route path="/processflow" element={<CustomerJourney />} />
          <Route path="/uk" element={<PaypennyUK />} />
          <Route path="/eu" element={<PaypennyEU />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/future" element={<CryptoFuture />} />
          <Route path="/flash" element={<FlashLoans />} />
          <Route path="/myth" element={<Myth />} />
        </Routes>
        {/* <Qr />
        <div className="divider container"></div>
        {window.location.href === "https://paypenny.io/uk" ? (
          <MoneySubFooter />
        ) : (
          <SubFooter />
        )}

        <div className="divider container"></div>
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

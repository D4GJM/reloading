import React from "react";
import "../css/BusinessFinace.css";
import images from "../image/1.webp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
export default function BusinessPersonalFinance() {
  return (
    <>
      <Header />

      <div
        className="background-container"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container-first">
          <img
            src={images}
            className="img-fluid"
            alt="Business and Personal Finance"
          />
          <div className="content">
            <div className="overlay">
              <p className="overlay-text">Business And Personal Finance</p>
              <div className="links-container">
                <a href="https://www.iykons.com/">Iykons</a>
                <span className="link-space"> </span>
                <a
                  href="https://www.iykons.com/services/"
                  className="services-link"
                >
                  Services
                </a>
              </div>
            </div>

            <div className="paragraph-section">
              <div className="styled-paragraph">
                <p>
                  Onswin is an independent business broker that offers a
                  comprehensive range of financial solutions to both individuals
                  and businesses.
                </p>
                <br />
                <p>
                  We take satisfaction in identifying the best funding choices
                  for every requirement, thanks to our specialised knowledge and
                  skills across the finance sector.
                </p>
                <br />
                <p>
                  We can assist you in locating the cheapest mortgage rates for
                  any type of buyer, whether it is a Buy to Let, a first time
                  buyer, or a re-mortgage. Onswin works with well-known
                  FCA-approved mortgage lenders and intermediaries. For
                  clarification, we do not offer mortgage advice or mortgage
                  brokerage however, we can handle all of the administrative
                  details prior to and during the mortgage application.
                </p>
                <br />
                <p>
                  Our ability to lend commercially is boosted by our membership
                  of the National Association of Commercial Finance Brokers
                  (NACFB). Bridging loans, start-up loans, VAT loans, commercial
                  loans, commercial mortgages, asset finance, and other services
                  are available.
                </p>
                <br />
                <p>
                  Being an NACFB Member broker ensures that consumers and
                  lenders are working with a professional expert who knows the
                  market and works to the highest standards.
                </p>
                <br />
                <p>
                  In addition to this, we can also help you with income tax
                  e-payment and income tax payment services.
                </p>
                <br />
                <p>
                  Onswin is an extension of the Iykons team that is dedicated to
                  providing administrative support for personal and business
                  mortgages.
                </p>
                <br />
                <p>
                  For more information about Onswin’s services and products,
                  please visit{" "}
                  <a href="https://www.onswin.com">www.onswin.com</a>.
                </p>
                <br />
                <p>
                  Onswin is authorised and regulated by the{" "}
                  <a href="https://register.fca.org.uk/s/firm?id=0014G00002wQUeHQAW">
                    Financial Conduct Authority (FCA)
                  </a>{" "}
                  and accredited by the National Association of Commercial
                  Finance Brokers (NACFB). We are registered with the{" "}
                  <a href="https://ico.org.uk/ESDWebPages/Entry/ZB342147">
                    Information Commissioner's Office (ZB342147)
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </>
  );
}

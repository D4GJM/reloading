import React from "react";

import images from "../image/1.webp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
import Aboutus from "./Aboutus";
export default function BusinessSupport() {
  return (
    <>
      <Header />
      <div
        className="background-container4"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container4-first">
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
                <Aboutus />{" "}
              </div>
              {/*<ContactForm />*/}
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </>
  );
}

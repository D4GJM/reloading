import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "./Icons/font-awesome/css/font-awesome.min.css";

import image1 from "./img/intro-carousel/1.jpg";
import image2 from "./img/intro-carousel/2.jpg";
import image3 from "./img/intro-carousel/3.jpg";
import image4 from "./img/intro-carousel/4.jpg";
import image5 from "./img/intro-carousel/5.jpg";

import aboutmisson from "./img/about-mission.jpg";
import aboutplan from "./img/about-plan.jpg";
import aboutvision from "./img/about-vision.jpg";
import ourHistory from "../image/ourHisory.jpg";
import "./Icons/css/ionicons.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id="intro">
        <div className="intro-container">
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: { image1 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h1>IYKONS</h1>
                    <p></p>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image2 } }}
              >
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image3 } }}
              >
                
              </div>
             
              <div
                className="carousel-item"
                style={{ backgroundImage: { image5 } }}
              >
                
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#introCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon ion-chevron-left"
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#introCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon ion-chevron-right"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      {/* #intro */}
      {/*==========================
Facts Section
    ============================*/}
      <section id="facts" className="wow fadeIn">
        <div className="container">
          <header className="section-header">
            <div className="content-wrapper">
              <div className="text-content">
                <h1>Welcome to IYKONS</h1>
                <h6>
                  <p className="sanu">
                    {/* Your paragraph content */}
                    <p>
                      IYKONS offers complete financial, IT, and business support
                      solutions for companies and individuals across three
                      continents.
                    </p>
                    <p>
                      Our excellent team of specialists can help you and your
                      business with your financial, IT, and business support
                      needs. Our mission is to meet the needs of SMEs under one
                      roof. We relish the challenges of finding the best
                      solutions for you, and we thrive on making our clients
                      happy.
                    </p>
                    <p>
                      To find out more about our services, please do not
                      hesitate to contact us online or at your nearest local
                      office.
                    </p>
                    <p>We are based in</p>
                    <ul>
                      <li>Chessington, Greater London, United Kingdom</li>
                      <li>Chennai, Tamil Nadu, India</li>
                      <li>Sydney, Australia</li>
                    </ul>
                    <p>
                      IYKONS is an ACCA-accredited chartered accountancy firm.
                      We undertake all aspects of Accountancy and Tax work.
                    </p>
                    <p>
                      Contact IYKONS to find out about other bespoke solutions
                      we offer.
                    </p>
                  </p>
                </h6>
              </div>
              <div className="image-content">
                <img src={image1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="facts-img"></div>
          </header>
        </div>
      </section>
      {/* #facts */}
      {/*==========================
About Us Section
    ============================*/}

      <section id="services">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h1>Services</h1>
            <br />
     
            <p></p>
          </header>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-analytics-outline" />
              </div>
              <h4 className="title">
                <a href="http://localhost:3000/AccountandFinance">Accounting & Finance</a>
              </h4>
              <p className="description">
                
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-bookmarks-outline" />
              </div>
              <h4 className="title">
                <a href="http://localhost:3000/TechnologyandInnovation">Technology & Innovation</a>
              </h4>
              <p className="description">
       
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="http://localhost:3000/DigitalMarketing">Digital Marketing & Branding</a>
              </h4>
              <p className="description">
            
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-speedometer-outline" />
              </div>
              <h4 className="title">
                <a href="http://localhost:3000/BusinessPersonalFinance">Business & Personal Finance</a>
              </h4>
              <p className="description">
          
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-barcode-outline" />
              </div>
              <h4 className="title">
                <a href="http://localhost:3000/BusinessSupport">Business Support & Consultancy</a>
              </h4>
              <p className="description">
         
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-people-outline" />
              </div>
              <h4 className="title">
                <a href="">IT Infrastructure Management</a>
              </h4>
              <p className="description">
          </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <header className="section-header">
            <h1>IYKONS PRODUCTS</h1>
            <p>
              <br></br>
              
              <br></br>
            </p>
          </header>
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="about-col">
                <div className="img">
                  <img src={aboutmisson} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-speedometer-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="http://localhost:3000/Fantach">IYKONS & Fintech </a>
                </h2>
                <p>
                  We create new or improve existing financial solutions for our
                  customers based on our nearly 20 years of experience in
                  banking and financial software development. We are prepared to
                  do market research and provide an effective fintech solution
                  for your company for the right financial management.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
                  <img src={aboutplan} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="http://localhost:3000/Iykonnect">IYCONNECT</a>
                </h2>
                <p>
                  IYCONNECT is a collaborative practice management platform to
                  manage the workflow, communicate with the team, and deliver
                  exceptional client work. IYCONNECT brings a total
                  transformation across the entire practice, allowing any firm
                  to maximize efficiencies, streamline processes and optimize
                  the scale.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-col">
                <div className="img">
                  <img src={aboutvision} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-eye-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">IYPay</a>
                </h2>
                <p>
                  HR Software for SMEs that is easy and economical Are you a
                  small or medium-sized firm seeking an easy-to-use, low-cost HR
                  Management System? We help you streamline your HR operations
                  by eliminating the need for time-consuming manual processes
                  with our simple-to-implement system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

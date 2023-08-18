import React from "react";
import "../css/IConnect.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import image3 from "../image/imj.jpg";
import SendMessage from "../SendMessaage/SendMessage";
export default function Iykonnect() {
  return (
    <>
      <Header />
      <div className="section">
        <h1>IYCONNECT</h1>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/glightbox.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/flatpickr.min.css" />

        <hr></hr>
        <br></br>

        <div className="container">
          <p>
            IYCONNECT is a collaborative practice management platform to manage
            the workflow, communicate with the team, and deliver exceptional
            client work. IYCONNECT brings a total transformation across the
            entire practice, allowing any firm to maximize efficiencies,
            streamline processes and optimize the scale.
          </p>
          <br></br>
          <hr></hr>
          <br></br> <br></br>
          <img src={image3} alt="Image" className="Raja" />
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3>IYCONNECT – A FLEXIBLE SOLUTION FOR YOUR BUSINESS NEEDS</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-pie-chart-fill me-4"></span>
            </div>
            <div>
              <h3>Visibility and Management</h3>
              <p>– Track wherever every job stands</p>
            </div>
          </div>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-bag-check-fill me-4"></span>
            </div>
            <div>
              <h3>Workflow Automation</h3>
              <p>Standardize and automate common processes</p>
            </div>
          </div>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-bag-check-fill me-4"></span>
            </div>
            <div>
              <h3>Collaboration & Connectivity</h3>
              <p>Unite the team together</p>
            </div>
          </div>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-bag-check-fill me-4"></span>
            </div>
            <div>
              <h3>Deliver Exceptional Standards</h3>
              <p>Work delivered on target</p>
            </div>
          </div>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-bag-check-fill me-4"></span>
            </div>
            <div>
              <h3>Improve Satisfaction</h3>
              <p>
                Build enduring client relationships by providing a first-class
                service
                <ul>
                  <li>Stay on top with IYCONNECT!</li>
                </ul>
              </p>
            </div>
          </div>
          <hr></hr>
          <br></br>
          <br></br>
          <h3>IYCONNECT – TEAM MANAGEMENT</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-bag-check-fill me-4"></span>
            </div>
            <div>
              <h3>
                Build enduring client relationships by providing a first-class
                service
              </h3>
              <p>
                <ul>
                  <li>
                    View and optimize all the jobs going on across your team.
                  </li>
                  <li>
                    Delegate work tasks and sub-tasks to the team so everyone
                    knows their own responsibility.
                  </li>
                  <li>
                    Real-time work-in-progress tracking – Track job progression,
                    identify setbacks and ensure targets are met on time.
                  </li>
                  <li>
                    A system-triggered notification through the dashboard and
                    via email when new tasks are assigned to team members and
                    remind the member about a missing and upcoming deadline.
                  </li>
                  <li>TSheets to track time against clients or jobs.</li>
                  <li>
                    Allocate resources, manage team efficiency, and achieve
                    productivity.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </>
  );
}

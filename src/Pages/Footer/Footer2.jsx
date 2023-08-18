import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/vendor/animate.css/animate.min.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../css/Footer.css'
export default function Footer2() {
  return (
    <>
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>IYKONS</h3>
                <p>
                14, Elm Road, Chessington, Surrey, <br />
                KT9 1AW, United Kingdom.
                  <br />
                  <br />
                  <strong>Phone:</strong> +44 20 3598 2904
                  <br />
                  <strong>Email:</strong> info@iykons.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Blog</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Accounting & Finance</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Technology & Innovation</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Digital Marketing & Branding</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Business & Personal Finance</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Business Support & Consultancy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "} {new Date().getFullYear()} 
          <strong>
            <span> IYKONS</span>
          </strong>
          . All Rights Reserved   Designed by <a href="#">IYKONS</a>
        </div>
        <div className="credits">
         
         { /* Designed by <a href="#">Iykons</a>*/}
        </div>
      </div>
    </footer>
    {/* End Footer */}
    </>
  )
}

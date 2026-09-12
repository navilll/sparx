"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer2: React.FC = () => {
  return (
    <footer className="main-footer footer-style-one style-two">
      <div className="bg bg-pattern-7"></div>
      {/* Contact List */}
      <div className="widgets-section">
        <div className="auto-container">
          <ul className="contact-list-two">
            <li>
              <div className="icon-box">
                <i className="icon fa fa-map-marker-alt"></i>
              </div>
              <div className="content">
                <div className="subtitle">office address</div>
                <div className="text">
                   Ist Floor, No 28,DCNET BUILDING, 5th Cross,<br/> 6th Main Rd, Mico Layout, BTM Layout 2nd Stage,<br/> Bengaluru, Karnataka 560076
                </div>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="icon fa fa-envelope"></i>
              </div>
              <div className="content">
                <div className="subtitle">send email</div>
                <div className="text">
                  <Link href="mailto:rishika@sparz.co.in">rishika@sparz.co.in</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="icon fa fa-phone"></i>
              </div>
              <div className="content">
                <div className="subtitle">call us</div>
                <div className="text">
                  <Link href="tel:+917996167000">+91-7996167000</Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="row">
            {/* About Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget about-widget">
                <figure className="image" style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px" }}>
                  <Link href="/">
                    <Image src="/assets/images/logo.webp" alt="Logo" width={250} height={67} priority />
                  </Link>
                </figure>
                <div className="text">
                  Established in 2021, SPARZ TELECOM delivers reliable analog phones and communication solutions to businesses across India.
                </div>
                <ul className="social-icon-two">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Links Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Quick Links</h5>
                <ul className="user-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/brands">Brands</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Explore Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget links-widget two">
                <h5 className="widget-title">Contact</h5>
                <ul className="user-links">
                  <li style={{ marginRight: "45px" }}>
                    Ist Floor, No 28,DCNET BUILDING, 5th Cross, 6th Main Rd, Mico Layout, BTM Layout 2nd Stage, Bengaluru, Karnataka 560076
                  </li>
                  <li className="mt-2">
                    <Link style={{ fontWeight: "bold" }} href="mailto:rishika@sparz.co.in">rishika@sparz.co.in</Link>
                  </li>
                  <li className="mt-2">
                    <Link style={{ fontWeight: "bold" }} href="tel:+917996167000">+91-7996167000</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Newsletter Widget */}
            <div className="footer-column col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <h4 className="widget-title">Newsletter</h4>
                <div className="newsletter-form">
                  <form action="#" method="post">
                    <div className="form-group">
                      <input
                        type="email"
                        id="Yemail"
                        name="Yemail"
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit" className="form-btn">
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
                    <div className="form-group checkbox">
                      <label className="custom-checkbox" htmlFor="terms">
                        <input
                          type="checkbox"
                          id="terms"
                          name="termsAccepted"
                        />
                        <span className="checkmark"></span>
                        I agree to all your terms and policies
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              Copyright © SPARZ TELECOM, All Rights Reserved.
            </div>
            <div className="right-box">
              <ul className="footer-nav">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
              <div
                className="scroll-to-top"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }
                }}
              >
                Top <span className="fa fa-arrow-up"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
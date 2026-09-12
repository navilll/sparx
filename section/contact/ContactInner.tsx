"use client";
import React from 'react';
import Link from 'next/link';

const ContactInner: React.FC = (): JSX.Element => {
    return (
        <>
    <section className="contact-section-five">
      <div className="outer-box">
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div
              className="content-column col-xl-7 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <h2 className="text-reveal-anim">Contact With Us</h2>
                </div>
                <div className="contact-form-three">
                    <form method="post" action="/" id="contact-form">
                        <div className="row">
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="text" id="Yname" name="Yname" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="email" id="Yemail" name="Yemail" placeholder="Email Address" required/>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <input type="tel" id="Ytel" name="Ytel" placeholder="Phone" required/>
                            </div>
                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                <textarea name="message" placeholder="Write a Message" required></textarea>
                            </div>
                            <div className="form-group col-lg-12 col-md-12 col-sm-12 mt-3">
                                <div className="btn-box">
                                    <button className="theme-btn btn-style-three upper"><span className="btn-title">Send Message</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
              </div>
            </div>
            {/* Contact Info Column */}
            <div className="contact-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="inner-box">
                  <h3 className="title">Get in Touch</h3>
                  <div className="text">
                    <Link href="tel:+917996167000" className="text">Phone: +91-7996167000</Link>
                  </div>
                  <div className="text">
                    <Link href="mailto:rishika@sparz.co.in" className="text">Email: rishika@sparz.co.in</Link>
                  </div>
                  <div className="text mt-2">
                    Looking for reliable analog phones for your office, hotel etc?
                  </div>
                </div>
                <div className="inner-box">
                  <h4 className="title">Address</h4>
                  <div className="text">1st Floor, No 28, DCNET Building,</div>
                  <div className="text">5th Cross, 6th Main Rd, Mico Layout, BTM Layout 2nd Stage,</div>
                  <div className="text">Bengaluru, Karnataka 560076</div>
                </div>
                <ul className="social-icon-four">
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
          </div>
        </div>
      </div>
    </section>

        </>
    )
}
export default ContactInner
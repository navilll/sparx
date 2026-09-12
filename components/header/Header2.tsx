"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleRemove2: () => void;
  scroll: boolean;
}

const Header2: React.FC<HeaderProps> = ({ handleOpen, handleRemove, handleRemove2, scroll }) => {
  return (
      <header className={`main-header header-style-two style-two ${scroll ? "fixed-header" : ""}`}>
        <div className="main-box">
          <div className="logo-box">
              <div className="logo">
                <Link href="#"><Image src="/assets/images/logo.webp" alt="Logo" width={250} height={67} priority /></Link>
              </div>
          </div>
          <div className="nav-outer">
            <nav className="nav main-menu">
              <NavLinks extraClassName="main-menu-list" />
            </nav>
          </div>
            <div className="outer-box">
              <div className="info-btn">
                  <i className="icon fa fa-phone"></i>
                  <Link href="#" className="phone">+92 526 420 009</Link>
              </div>

              {/* <!-- Mobile Nav toggler --> */}
              <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
            </div>
            <Link href="#" className="theme-btn header-style-btn floating-btn"><span className="btn-title">Contact Now<i
            className="fa fa-arrow-right"></i></span></Link>
        </div>
        {/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={() => { handleRemove(); handleRemove2(); }}/>
          <nav className="menu-box">
            <div className="upper-box">
                <div className="nav-logo">
                  <Link href="#">
                    <Image src="/assets/images/logo.webp" alt="" width={120} height={67} priority />
                  </Link>
                </div>
                <div className="close-btn" onClick={() => { handleRemove(); handleRemove2(); }}><i className="icon fa fa-times"></i></div>
            </div>
            <ul className="navigation clearfix">
              <MobileMenu />
            </ul>
            <ul className="contact-list-one">
              <li>
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <div className="text"><Link href="tel:+917996167000">+91-7996167000</Link></div>
              </li>
              <li>
                <i className="icon lnr-icon-envelope1"></i>
                <span className="title">Send Email</span>
                <div className="text"><Link href="mailto:rishika@sparz.co.in">rishika@sparz.co.in</Link></div>
              </li>
              <li>
                <i className="icon lnr-icon-map-marker"></i>
                <span className="title">Address</span>
                <div className="text">1st Floor, No 28, DCNET BUILDING, 5th Cross, 6th Main Rd, Mico Layout, BTM Layout 2nd Stage, Bengaluru, Karnataka 560076</div>
              </li>
            </ul>
            <ul className="social-links">
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
              <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
            </ul>
          </nav>
        </div>
        {/* <!-- End Header Search --> */}

        {/* <!-- Sticky Header  --> */}
        <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="#" title=""><Image src="/assets/images/logo.webp" alt="" width={200} height={67} priority /></Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      <NavLinks extraClassName="main-menu-list" />
                    </ul>
                  </div>
                </nav>
                {/* <!--Mobile Navigation Toggler--> */}
                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header2;
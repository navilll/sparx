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

const Header: React.FC<HeaderProps> = ({ handleOpen, handleRemove, handleRemove2, scroll }) => {

  return (
    <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
      {/* Header Top */}
      <div className="header-top">
        <div className="inner-container">
          <div className="top-left">
            <ul className="list-style-one">
              <li><i className="fa fa-map-marker-alt"></i> Ist Floor, No 28, DCNET BUILDING, Bengaluru, Karnataka 560076</li>
              <li><i className="fa fa-envelope"></i>
                <Link href="mailto:rishika@sparz.co.in" className="email-link">rishika@sparz.co.in</Link>
              </li>
              <li><i className="fa fa-phone"></i>
                <Link href="tel:+91-7996167000" className="phone-link">+91-7996167000</Link>
              </li>
            </ul>
          </div>

          <div className="top-right">
            <div className="inner">
              <ul className="nav-list">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Help</Link></li>
              </ul>
              <ul className="social-icon-one light">
                <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>
                <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Lower */}
      <div className="header-lower">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link href="/"><Image src="/assets/images/logo.webp" alt="Logo" width={150} height={67} priority /></Link>
            </div>
          </div>

          <div className="nav-outer">
            <nav className="nav main-menu">
              <NavLinks extraClassName="main-menu-list" />
            </nav>
          </div>

          <div className="outer-box">
            <div className="btn-box">
              <Link href="/contact" className="theme-btn btn-style-one">
                <span className="btn-title">Get in Touch</span>
              </Link>
            </div>

            <div className="mobile-nav-toggler" onClick={handleOpen}>
              <span className="icon lnr-icon-bars"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={() => { handleRemove(); handleRemove2(); }} />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/"><Image src="/assets/images/logo.webp" alt="Logo" width={150} height={67} /></Link>
            </div>
            <div className="close-btn" onClick={() => { handleRemove(); handleRemove2(); }}>
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>

          <ul className="contact-list-one">
            <li>
              <i className="icon lnr-icon-phone-handset"></i>
              <span className="title">Call Now</span>
              <div className="text"><Link href="#">+92 (8800) - 98670</Link></div>
            </li>
            <li>
              <i className="icon lnr-icon-envelope1"></i>
              <span className="title">Send Email</span>
              <div className="text"><Link href="#">help@company.com</Link></div>
            </li>
            <li>
              <i className="icon lnr-icon-map-marker"></i>
              <span className="title">Address</span>
              <div className="text">66 Broklyant, New York India 3269</div>
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

      {/* Sticky Header */}
      <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link href="/"><Image src="/assets/images/logo.webp" alt="Logo" width={150} height={67} /></Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <ul className="navigation clearfix">
                  <NavLinks extraClassName="main-menu-list" />
                </ul>
              </nav>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

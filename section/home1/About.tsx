import React from "react";
import Image from "next/image";
import Link from 'next/link';
import ProgressBar2 from '../../components/elements/ProgressBar2';


const About: React.FC = ()=> {
  return (
    <section className="about-section">
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="auto-container">
            <div className="row">
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight">
                    <div className="inner-column">
                        <div className="sec-title">
                            <div className="sub-title">About SPARZ</div>
                            <h2 className="text-reveal-anim">Premium Quality Analog <br/> Phones for Business</h2>
                            <div className="text">SPARZ is recognized as a leading analog telephone supplier
                                in India, trusted by small businesses and enterprises across the country for
                                durability, clear voice quality, and easy everyday functionality.</div>
                        </div>
                        <div className="icon-outer-box row">
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <i className="icon flaticon-graphic-design"></i>
                                    <h6 className="title">Premium Build Quality</h6>
                                </div>
                            </div>
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <i className="icon flaticon-targeted-marketing"></i>
                                    <h6 className="title">Clear Audio</h6>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skill-item">
                                <div className="skill-header">
                                    <div className="skill-title">Business Communication</div>
                                </div>
                                <ProgressBar2 percentage={90} duration={3000} />
                            </div>
                        </div>
                        <ul className="list-style-two">
                            <li><i className="fa fa-check-circle"></i> Reliable analog phones for daily business use</li>
                            <li><i className="fa fa-check-circle"></i> Trusted across offices, hotels and hospitals</li>
                            <li><i className="fa fa-check-circle"></i> Easy-to-use designs with dependable performance</li>
                            <li><i className="fa fa-check-circle"></i> PBX and EPABX compatible solutions on selected models</li>
                        </ul>
                        <div className="btn-box">
                            <Link className="theme-btn-main" href="/about-us">
                                <span className="theme-btn-arrow-left"><i className="fa fa-arrow-right"></i></span>
                                <span className="theme-btn">Discover More</span>
                                <span className="theme-btn-arrow-right"><i className="fa fa-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                    <div className="inner-column">
                        <div className="image-box">
                            <div className="shape-1"></div>
                            <figure className="image">
                              <Image
                                src="/assets/images/about/img-1.webp"
                                alt="SPARZ TELECOM analog telephone solutions"
                                width={1000}
                                height={1500}
                                sizes="(max-width: 991px) 90vw, 500px"
                              />
                            </figure>
                            <div className="exp-box">
                                <div className="icon-8"></div>
                                <h2 className="count">5+</h2>
                                <div className="text">years of<br/>experience</div>
                            </div>
                            <div className="icon-box">
                                <div className="icon-6"></div>
                            </div>
                            <div className="icon-box-two">
                                <div className="icon-7"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
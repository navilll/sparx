import React from "react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: "flaticon-graphic-design",
    title: "Premium Quality",
    text: "Durable analog phones built to withstand daily business use across every industry.",
  },
  {
    icon: "flaticon-teaching",
    title: "Trusted Nationwide",
    text: "Recognized across India as a leading analog telephone supplier for offices, hotels etc",
  },
  {
    icon: "flaticon-laptop",
    title: "98% Satisfaction Rate",
    text: "Backed by dedicated support committed to reliable business communication.",
  },
];

const BenefitSection: React.FC = (): JSX.Element => {
  return (
    <section className="benefit-section">
      <div className="bg bg-pattern-5"></div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div
            className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 order-2"
            data-wow-delay="200ms"
          >
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Our Benefits</div>
                <h2 className="text-reveal-anim">
                  Why You Should <br /> Choose SPARZ
                </h2>
                <h6 className="title">
                  Our goal is to help businesses stay connected with reliable,
                  easy-to-use analog communication.
                </h6>
              </div>

              {benefits.map((item, index) => (
                <div className="benefit-block" key={index}>
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className={`icon ${item.icon}`}></i>
                    </div>
                    <div className="content-box">
                      <h6 className="title">{item.title}</h6>
                      <div className="text">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="btn-box">
                <Link href="/page-contact" className="theme-btn-main">
                  <span className="theme-btn-arrow-left">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                  <span className="theme-btn">Discover More</span>
                  <span className="theme-btn-arrow-right">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <Image
                  src="/assets/images/resource/benefit1-1.webp"
                  alt="Benefit Visual"
                  width={570}
                  height={570}
                  sizes="(max-width: 1199px) 90vw, 570px"
                  style={{ objectFit: "cover" }}
                />
              </figure>
              <div
                className="exp-box bounce-x"
                data-wow-delay="300ms"
              >
                <i className="icon flaticon-recommend"></i>
                <div className="cat">RELIABLE COMMUNICATION</div>
                <h4 className="title">
                  We Help Your Business <br /> Stay Connected <br /> Every Day
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
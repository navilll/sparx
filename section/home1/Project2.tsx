"use client";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Understanding Your Needs",
    text: "We assess your business type and identify the right analog phone setup for your space.",
    icon: "flaticon-laptop",
  },
  {
    number: "02",
    title: "Product Selection",
    text: "We recommend durable, PBX-compatible models suited to your offices, hotels, or hospitals.",
    icon: "flaticon-laptop",
  },
  {
    number: "03",
    title: "Quality Testing",
    text: "Every unit is checked for voice clarity, durability, and PBX/EPABX compatibility before dispatch.",
    icon: "flaticon-laptop",
  },
  {
    number: "04",
    title: "Delivery & Support",
    text: "Phones are delivered and set up, with ongoing support to keep your business connected.",
    icon: "flaticon-laptop",
  },
];

const WorkProcessSection: React.FC = (): JSX.Element => {
  return (
    <section className="project-section-four">
      <div className="icon-21 bounce-x"></div>
      <div className="shape-8"></div>
      <div className="auto-container">
        <div className="sec-title">
          <div className="sub-title">WORKING PROCESS</div>
          <h2 className="text-reveal-anim">Our Work Process</h2>
        </div>
        <div className="row g-4 align-items-center">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight">
            <div className="inner-column">
              {steps.map((step, index) => (
                <div
                  className={`icon-box ${index === steps.length - 1 ? "mb-0" : ""}`}
                  key={index}>
                  <div className="inner-box">
                    <div className="number">{step.number}</div>
                    <i className={`icon ${step.icon}`}></i>
                  </div>
                  <div className="content-box">
                    <h4 className="title">{step.title}</h4>
                    <div className="text">{step.text}</div>
                  </div>
                </div>
              ))}
              <div className="icon-7"></div>
            </div>
          </div>

          {/* Image Column */}
          <div
            className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay="300ms">
            <div className="inner-column">
              <div className="image-box">
                <figure className="image">
                  <img src="/assets/images/resource/about1-1.webp" alt="Work Process" />
                </figure>
                <div className="exp-box">
                  <div className="icon-8"></div>
                  <h2 className="count">5+</h2>
                  <div className="text">
                    years of
                    <br />
                    experience
                  </div>
                </div>
                <div className="icon-7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
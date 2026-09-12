"use client";
import Link from "next/link";
import React, { useState } from "react";

const accordionData = [
  {
    title: "Corporate Office Solutions",
    category: "Corporate",
    description:
      "We provide reliable analog phones for reception areas, executive cabins, and departmental use. Designed for clarity and durability, they integrate seamlessly with PBX/EPABX systems for smooth communication.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
  {
    title: "Hotels and Reception Solutions",
    category: "Hospitality",
    description:
      "We provide high-quality analog phones designed for guest rooms, lobbies, and front desks. Easy to use with minimal maintenance, they ensure seamless communication between guests and hotel staff.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
  {
    title: "Hospital Solutions",
    category: "Healthcare",
    description:
      "We provide hospital-grade analog phones designed for nurse stations, doctor's cabins, and receptions. Easy to operate, they integrate with PBX/EPABX systems for fast internal extensions and call transfers.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
  {
    title: "Education Analog Phones",
    category: "Education",
    description:
      "We provide durable analog phones for receptions, principals' offices, staff rooms, and hostels. Easy to use and PBX-compatible, they enable smooth coordination and quick response across campuses.",
    link: "/page-service-details",
    icon: "flaticon-targeted-marketing",
  },
];

const HzAccordionSection: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hzAccordion-section">
      <div className="shape-2"></div>
      <div className="shape-15"></div>
      <div className="shape-4"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Solutions</div>
          <h2 className="text-reveal-anim">
            Solutions Built <br /> For Every Business
          </h2>
        </div>
        <div className="Client-gallery-wraper">
          <div className="options">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`option ${activeIndex === index ? "active" : ""}`}
                style={{
                  background:
                    activeIndex === index
                      ? "var(--theme-color-dark)"
                      : "var(--theme-color-light)",
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="client-content">
                  <div className="search-icon">
                    <i className={`icon ${item.icon}`}></i>
                  </div>
                  <div className="label">
                    <div className="button-icon">
                      <i className="icon fa fa-arrow-right"></i>
                    </div>
                    <div className="icon-custom">
                      <h3 className="title">{item.title}</h3>
                    </div>
                    <div className="info">
                      <div className="cont">
                        <div className="icon-48"></div>
                        <div className="sub prafont">{item.description}</div>
                        <div className="sub-title">
                          <h5>{item.category}</h5>
                        </div>
                        <div className="main headfont">
                          <Link href={item.link}>{item.title}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HzAccordionSection;
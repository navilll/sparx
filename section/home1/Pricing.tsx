import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    icon: "flaticon-technology",
    price: "Sparz Telecom",
    title: "Basic Analog Phone",
    description:
      "A reliable entry-level phone built for everyday business use in small offices and shops.",
    features: [
      "Clear Voice Quality",
      "Durable Build",
      "Easy to Use",
    ],
    delay: "0ms",
  },
  {
    icon: "flaticon-digital-services",
    price: "Sparz Telecom",
    title: "Standard Analog Phone",
    description:
      "PBX/EPABX compatible phone suited for corporate offices, hotels, and reception areas.",
    features: [
      "PBX/EPABX Compatible",
      "Extension Support",
      "Business-Ready Design",
    ],
    delay: "300ms",
  },
  {
    icon: "flaticon-laptop",
    price: "Sparz Telecom",
    title: "Premium Analog Phone",
    description:
      "Hospital and enterprise-grade phone for high-volume, mission-critical communication.",
    features: [
      "Fast Call Transfers",
      "Enterprise Durability",
      "Priority Support",
    ],
    delay: "600ms",
  },
];

const PricingSection: React.FC = (): JSX.Element => {
  return (
    <section className="pricing-section">
      <div className="shape-9"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">our models</div>
          <h2 className="text-reveal-anim">
            Analog Phones for <br /> Every Business Need
          </h2>
        </div>

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-block col-lg-4 col-md-6 col-sm-12"
              data-wow-delay={plan.delay}
            >
              <div className="inner-box">
                <i className={`icon ${plan.icon}`}></i>
                <div className="content">
                  <h4 className="time">{plan.price}</h4>
                  <h4 className="title">{plan.title}</h4>
                  <div className="text">{plan.description}</div>
                  <ul className="list-style-three">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <i className="fal fa-arrow-right"></i> {feature}
                      </li>
                    ))}
                  </ul>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What makes SPARZ analog phones reliable?',
    answer:
      'Our phones are built with durable components and tested for clear voice quality before dispatch. They are designed for everyday business use with minimal maintenance required.',
  },
  {
    question: 'Are SPARZ phones compatible with PBX/EPABX systems?',
    answer:
      'Yes, selected models integrate seamlessly with PBX and EPABX systems, enabling smooth internal extensions, call transfers, and departmental communication across your business.',
  },
  {
    question: 'Which businesses use SPARZ analog phones?',
    answer:
      'Our phones are widely used in corporate offices, hotels, hospitals, and educational institutions—anywhere reliable, easy-to-use voice communication is essential daily.',
  },
  {
    question: 'How can I get pricing for SPARZ phones?',
    answer:
      'Contact us directly at +91-7996167000 or via chat, and our team will share pricing and scheme details based on your business requirements and quantity needed.',
  },
  {
    question: 'Do SPARZ phones come with any warranty or support?',
    answer:
      'Yes, all SPARZ analog phones come with manufacturer support and dedicated after-sales assistance, ensuring your business communication stays uninterrupted with minimal downtime.',
  },
];

const FaqSection: React.FC = ()=> {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="shape-17" />
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="200ms">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">our faqs</div>
                <h2 className="text-reveal-anim">
                  Reliable Communication <br /> Built for Business
                </h2>
              </div>
              {/* Accordion Box */}
              <ul className="accordion-box">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                    <div
                      className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                      onClick={() => toggleAccordion(index)}>
                      {faq.question}
                      <i className="icon fa fa-plus" />
                    </div>
                    <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image bounce-x">
                <Image
                  src="/assets/images/resource/faq.webp"
                  alt="FAQ Illustration"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </figure>
              <div className="icon-20 bounce-y" />
              <div className="icon-21 bounce-x" />
              <div className="icon-22" />
              <div className="icon-23" />
              <div className="icon-24 zoom-one" />
              <div className="icon-25 zoom-one" />
              <div className="shape-18 zoom-one" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
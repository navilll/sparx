"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: `We switched our reception and executive cabins to SPARZ analog phones two years ago. The voice clarity is excellent and we haven't had a single unit fail on us since.`,
    name: "Rajesh Mehta",
    role: "Office Administrator",
    image: "testi-author-1.webp",
  },
  {
    text: `Running a busy hotel front desk means we need phones that just work. SPARZ handsets have been reliable across every guest room and lobby extension without any maintenance calls.`,
    name: "Anita Sharma",
    role: "Hotel Manager",
    image: "testi-author-2.webp",
  },
  {
    text: `Our hospital needed dependable phones for nurse stations and doctor cabins. SPARZ integrated smoothly with our PBX system and the call transfers have never let us down.`,
    name: "Dr. Vikram Rao",
    role: "Hospital Administrator",
    image: "testi-author-3.webp",
  },
];

const TestimonialSection: React.FC = ()=> {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonial-section">
      <div className="shape-8"></div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Testimonials</div>
                <h2 className="text-reveal-anim">
                  What They're Saying <br /> About SPARZ
                </h2>
              </div>
              <div className="outer-box">
                <Swiper
                  modules={[Navigation]}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation={{
                    prevEl: ".testimonial-swiper-prev",
                    nextEl: ".testimonial-swiper-next",
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop
                  className="testi-swiper"
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="icon-quote"></div>
                          <div className="text">{item.text}</div>
                          <div className="author-box">
                            <h6 className="name">{item.name}</h6>
                            <div className="designation">{item.role}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-navs-box">
                  <div className="image-box">
                    {testimonials.map((item, index) => (
                      <div
                        key={index}
                        className={`author-image ${
                          index === activeIndex ? "active" : ""
                        }`}
                        data-index={index}
                      >
                        <Image
                          src={`/assets/images/resource/${item.image}`}
                          alt={item.name}
                          width={80}
                          height={90}
                          sizes="80px"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="shape-6"></div>
                        <div className="shape-7"></div>
                      </div>
                    ))}
                  </div>
                  <div className="nav-box">
                    <div className="swiper-button-prev testimonial-swiper-prev">
                      <span className="icon fal fa-long-arrow-left"></span>
                    </div>
                    <div className="swiper-button-next testimonial-swiper-next">
                      <span className="icon fal fa-long-arrow-right"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image bounce-x">
                <Image
                  src="/assets/images/resource/testi1-1.webp"
                  alt="Decorative"
                  width={438}
                  height={696}
                  sizes="(max-width: 1199px) 70vw, 438px"
                  style={{ objectFit: "contain" }}
                />
              </figure>
              <div className="icon-10 bounce-x"></div>
              <div className="icon-11 bounce-y"></div>
              <div className="icon-12 bounce-x"></div>
              <div className="icon-13 zoom-one"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
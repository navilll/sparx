"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const BannerSection: React.FC = (): JSX.Element => {
  const slides = [
    {
      id: 1,
      title: (
        <>
          <span>Sparz Telecom</span>
          <br />
          Voice for India&apos;s{""}
          <br/><span className="color">Business</span>
        </>
      ),
      text: "Premium analog phones built for clear, reliable communication across offices, hotels, hospitals, schools, and businesses.",
      button: "Explore Products",
      buttonLink: "/products",
      image: "/assets/images/banner/phone.webp",
    },
    {
      id: 2,
      title: (
        <>
          Reliable Communication.
          <br />
          Built for <span className="color">Business</span>
        </>
      ),
      text: "Professional analog phones for offices, hotels, hospitals, and educational institutions. Designed for dependable everyday communication.",
      button: "View Solutions",
      buttonLink: "/about-us",
      image: "/assets/images/banner/phone-2.webp",
    }
  ];

  return (
    <section className="banner-section">
      <Swiper
        className="banner-swiper"
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".banner-swiper-next",
          prevEl: ".banner-swiper-prev",
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="banner-slide">
            <div className="outer-box">
              <div className="inner-box banner-box">
                <div className="bg bg-pattern-1"></div>

                <div className="icon-5 bounce-x"></div>

                <div className="row">
                  {/* Content Column */}
                  <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h1 className="title animate-2">
                        {slide.title}
                      </h1>

                      <div className="text animate-3">
                        {slide.text}
                      </div>

                      <div className="btn-box animate-4">
                        <Link
                          className="theme-btn-main"
                          href={slide.buttonLink}
                        >
                          <span className="theme-btn-arrow-left">
                            <i className="fa fa-arrow-right"></i>
                          </span>

                          <span className="theme-btn">
                            {slide.button}
                          </span>

                          <span className="theme-btn-arrow-right">
                            <i className="fa fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column animate-x">
                      <div className="icon-lines zoom-in"></div>

                      <figure className="image animate-4 bounce-x">
                        <Image
                          src={slide.image}
                          alt={`SPARZ TELECOM - ${slide.button}`}
                          width={500}
                          height={300}
                          sizes="(max-width: 1199px) 90vw, 500px"
                          priority={slide.id === 1}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="nav-box">
        <div className="swiper-button-prev banner-swiper-prev">
          <span className="icon fa fa-angle-left"></span>
        </div>

        <div className="swiper-button-next banner-swiper-next">
          <span className="icon fa fa-angle-right"></span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-box">
        <div className="author-box">
          <div className="author-image-box">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="author-image">
                <Image
                  src={`/assets/images/banner/author-${num}.webp`}
                  alt={`SPARZ customer ${num}`}
                  width={60}
                  height={60}
                />
              </div>
            ))}
          </div>

          <div className="text">
            Trusted by <span className="number">Businesses</span> across India
          </div>
        </div>

        <div className="success-text">
          <div className="text">
            <span className="number">100%</span> Reliable Communication
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
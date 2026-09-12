"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const products = [
  { id: 1, image: '/assets/images/resource/project1-1.jpg', category: 'SPARZ TELECOM', title: 'SKL019' },
  { id: 2, image: '/assets/images/resource/project1-2.jpg', category: 'SPARZ TELECOM', title: 'SKL101' },
  { id: 3, image: '/assets/images/resource/project1-3.jpg', category: 'SPARZ TELECOM', title: 'SKL1026' },
  { id: 4, image: '/assets/images/resource/project1-4.jpg', category: 'SPARZ TELECOM', title: 'SKL1028' },
  { id: 5, image: '/assets/images/resource/project1-5.jpg', category: 'SPARZ TELECOM', title: 'SKL1382' },
  { id: 6, image: '/assets/images/resource/project1-1.jpg', category: 'SPARZ TELECOM', title: 'SKL2045' },
  { id: 7, image: '/assets/images/resource/project1-2.jpg', category: 'SPARZ TELECOM', title: 'SKL2087' },
];

const ProjectSwiper: React.FC = () => {
  return (
    <section className="project-section">
      <div className="sec-title light text-center">
        <div className="sub-title">
          Our Products
        </div>
        <h2 className="text-reveal-anim">
          SKL Series Analog Phone
        </h2>
      </div>
      <div className="outer-box">
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          grabCursor
          loop
          centeredSlides
          spaceBetween={10}
          effect="coverflow"
          coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 10,
          modifier: 1.5,
          slideShadows: true,
          }}
          breakpoints={{
          1600: { slidesPerView: 5 },
          1200: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          580: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
          }}
          pagination={{ clickable: true }}
          className="project-swiper"
        >
          {products.map((product) => (
              <SwiperSlide key={product.id} className="project-block swiper-slide">
                  <div className="inner-box">
                      <div className="image-box">
                      <figure className="image">
                          <Link href="/about">
                          <Image
                              src={product.image}
                              alt={product.title}
                              width={540}
                              height={400}
                              priority
                          />
                          </Link>
                      </figure>
                      </div>
                      <div className="content-box">
                      <div className="cat-box">
                          <div className="cat">{product.category}</div>
                      </div>
                      <h4 className="title">{product.title}</h4>
                      </div>
                      <Link href="/page-project-details" className="readmore" aria-label={`Read more about ${product.title}`}>
                      <i className="fa fa-arrow-up-right" />
                      </Link>
                  </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSwiper;
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { products } from "../../lib/products";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
                    <Link href={`/products/${product.id}`}>
                          <Image
                      src={product.image}
                      alt={product.name}
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
                          <h4 className="title">{product.name}</h4>
                      </div>
                          <Link href={`/products/${product.id}`} className="readmore" aria-label={`Read more about ${product.name}`}>
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
"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const services = [
  {
    img: "/assets/images/service/corporate.webp",
    icon: "flaticon-laptop",
    title: "Corporate Office Solutions",
    text: "Reliable analog phones for reception areas and executive cabins, integrating seamlessly with PBX/EPABX systems.",
    features: ["PBX/EPABX Compatible", "Built for Durability", "Clear Voice Quality"],
  },
  {
    img: "/assets/images/service/hotel.webp",
    icon: "flaticon-health-check",
    title: "Hotels and Reception Solutions",
    text: "High-quality, low-maintenance phones for guest rooms, lobbies, and front desks with seamless staff coordination.",
    features: ["Guest Room Ready", "Low Maintenance", "Uninterrupted Connectivity"],
  },
  {
    img: "/assets/images/service/hospital.webp",
    icon: "flaticon-promotion",
    title: "Hospitals and Healthcare Solutions",
    text: "Hospital-grade phones for nurse stations and doctor's cabins, enabling fast internal extensions and transfers.",
    features: ["Fast Internal Extensions", "Easy to Operate", "Reliable Call Transfers"],
  },
  {
    img: "/assets/images/service/education.webp",
    icon: "flaticon-laptop",
    title: "Education and Campus Solutions",
    text: "Durable, PBX-compatible phones for receptions, staff rooms, and hostels enabling smooth campus coordination.",
    features: ["PBX Compatible", "Campus-Wide Coordination", "Quick Response"],
  },
];
const ServicesSection: React.FC = ()=> {
  return (
    <section className="service-section">
      <div className="bg bg-pattern-2"></div>
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title text-center">
          <div className="sub-title">Solutions</div>
          <h2 className="text-reveal-anim">
            Solutions We're <br /> Offering to Businesses
          </h2>
        </div>
        <div className="outer-box">
            <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".service-swiper-prev",
              nextEl: ".service-swiper-next",
            }}
            breakpoints={{
                320: { slidesPerView: 1 },
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
            }}
            >

            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="service-block">
                  <div className="inner-box">
                    {/* Image */}
                    <div className="image-box">
                      <figure className="image">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={370}
                          height={270}
                          sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 370px"
                          style={{ objectFit: "cover", width: "370px", height: "270px" }}
                          />
                      </figure>
                      <div className="icon-box">
                        <i className={`icon ${item.icon}`} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="content-box">
                      <h4 className="title">
                        {item.title}
                      </h4>
                      <div className="text">{item.text}</div>
                      <ul className="list-style-three light">
                        {item.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fal fa-arrow-right"></i> {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="btn-box">
                        <Link href="/about-us" className="readmore">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="nav-box">
            <div className="swiper-button-prev service-swiper-prev">
              <span className="icon fal fa-long-arrow-left"></span>
            </div>
            <div className="swiper-button-next service-swiper-next">
              <span className="icon fal fa-long-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
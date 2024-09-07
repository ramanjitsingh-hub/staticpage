"use client"; // <===== REQUIRED

import React from "react";


// Swiper components, modules and styles
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper m-20 w-80 "
        // Modified width and height
      >
         <a href = "https://wa.link/rjjp97"> <SwiperSlide>
          <img className ='rounded-xl'src = 'https://i.imgur.com/06PdUjY.jpeg'/>
         
        </SwiperSlide>
        </a>
        <a href = "https://wa.link/zl0zu6">
        <SwiperSlide>
          <img className ='rounded-xl' src = 'https://i.imgur.com/zLgpQJN.jpeg'/>
        </SwiperSlide>
        </a>
        <a href="https://wa.link/17e4go">
        <SwiperSlide>
          <img className ='rounded-xl' src = 'https://i.imgur.com/Qb9v9sM.jpeg'/>
        
        </SwiperSlide>
        </a>     
      </Swiper>
    </>
  );
};

export default DemoSlider;
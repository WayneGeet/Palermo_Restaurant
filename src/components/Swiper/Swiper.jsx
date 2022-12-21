import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react'

const Swiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination = {{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <section className="card">
          <h1 className="title">{title}</h1>
          <h2 className="recipes">{calories}</h2>
          <div className="image-wrapper">
              <img src={image} alt="" />
          </div>
        </section>  
      </SwiperSlide>

    </Swiper>
  )
}

export default Swiper
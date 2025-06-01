import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider4.jpg'
import slider3 from '../../assets/images/slider3.webp'
import slider4 from '../../assets/images/slider17.jpeg'
import slider5 from '../../assets/images/slider8.jpeg'
import slider6 from '../../assets/images/slider13.jpeg'
import slider7 from '../../assets/images/slider9.jpeg'
import slider8 from '../../assets/images/slider11.jpeg'
import slider9 from '../../assets/images/slider2.webp'

const Slider  = () =>{

const horizontalSwiperRef = useRef(null);

  return (
    <>
      <Swiper
        className="mySwiper swiper-h pb-5"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        modules={[Pagination,Autoplay]}
          onSwiper={(swiper) => (horizontalSwiperRef.current = swiper)}
      onSlideChange={(swiper) => {
        // When we hit the vertical Swiper slide, stop autoplay
        if (swiper.realIndex === 1) {
          swiper.autoplay.stop();
          setTimeout(() => swiper.autoplay.start(), 9000); // 7 seconds
        } else {
          swiper.autoplay.start();
        }
      }}
      >
        <SwiperSlide><img className='img-fluid w-100' src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide>
              <div style={{ height: '100%', overflow: 'hidden' }}>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            modules={[Pagination, Autoplay]} style={{ height: '100%' }}
          >
            <SwiperSlide><img className='img-fluid w-100' src={slider2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='img-fluid w-100' src={slider9} alt="" /></SwiperSlide>
            <SwiperSlide><img className='img-fluid w-100' src={slider4} alt="" /></SwiperSlide>
            <SwiperSlide><img className='img-fluid w-100' src={slider5} alt="" /></SwiperSlide>
            <SwiperSlide><img className='img-fluid w-100' src={slider3} alt="" /></SwiperSlide>
          </Swiper>
          </div>
        </SwiperSlide>
        <SwiperSlide><img className='img-fluid w-100' src={slider7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img-fluid w-100' src={slider8} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );


}
export default Slider
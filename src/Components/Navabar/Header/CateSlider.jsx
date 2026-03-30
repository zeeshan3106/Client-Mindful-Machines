import React, { useRef, useState } from 'react';


import {Link} from 'react-router-dom'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Cate from './Images/cate1.png'
import Cate8 from './Images/cate8.png'
import Cate1 from './Images/cate.png'

import './CateSlider.css'



function CateSlider() {
  return (
    <div className='CateSlider'>
      <div className='container '>
      
<Swiper
        slidesPerView={5}
        spaceBetween={8}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper "

        breakpoints={{

          1024:{
            slidesPerView:8
          }

        }}
       
      >
        
        <SwiperSlide>
          <Link className='Link'>
          <div className='   item1 shadow-md rounded-md'>
            <div className=''>
            <img      src={Cate1}></img></div>
            <div className='font-sizes-Category '>Health</div>
          </div>
             


</Link>

        </SwiperSlide>
        <SwiperSlide>
     <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Wellness</div>
          </div>
             


</Link>
          
        </SwiperSlide>
        <SwiperSlide>
              <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Home Devices</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
             <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>AI Gadgets</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>    <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Home Devices</div>
          </div>
             


</Link></SwiperSlide>
        <SwiperSlide>
              <Link className='Link'>
          <div className='item1 shadow-md rounded-md pt-5 pb-'>
            <img className="" src={Cate8}></img>
            <div>AI Drones</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Robots</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
             <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Home Robots</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Humniod Robots</div>
          </div>
             


</Link>
        </SwiperSlide>
         <SwiperSlide>
              <Link className='Link'>
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Industrial Robotics</div>
          </div>
             


</Link>
        </SwiperSlide>




      </Swiper>



</div>
    </div>
  )
}

export default CateSlider
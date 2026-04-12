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
        slidesPerView={4}
        spaceBetween={3}
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
          <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='   item1 shadow-md rounded-md'>
            <div className=''>
            <img      src={Cate}></img></div>
            <div className='font-sizes-Category '>Health</div>
          </div>
             


</Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Wellness Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Wellness</div>
          </div>
             


</Link>
          
        </SwiperSlide>
        <SwiperSlide>
               <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Home Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Home Devices</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Drones")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>AI Drones</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>     <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Humanoid Robots")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Humanoid Robots</div>
          </div>
             


</Link></SwiperSlide>
        <SwiperSlide>
               <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Industrial Robots")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md  pb-'>
            <img className="" src={Cate}></img>
            <div>Industrial Robots</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
               <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Popular</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
              <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Latest</div>
          </div>
             


</Link>
        </SwiperSlide>
        <SwiperSlide>
               <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md'>
            <img src={Cate}></img>
            <div>Featured</div>
          </div>
             


</Link>
        </SwiperSlide>
      




      </Swiper>



</div>
    </div>
  )
}

export default CateSlider
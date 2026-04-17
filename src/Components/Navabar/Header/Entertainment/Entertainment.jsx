import './Entertainment.css'

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Entertainment() {
  return (
    <div>

        <div className='flex justify-center font-bold mt-5 text-[30px]'>Entertainment.</div>

        <div className='pb-0'><Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      centeredSlides={true}
     
      spaceBetween={5}
       loop={true}
  
      slidesPerView={2}
      navigation={{clickable:true}}

     
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect={'creative'}
    
  
    >
      <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
   Intelligence with a Heart.
  </div>

  </div>
      </SwiperSlide>
         <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/8294597/pexels-photo-8294597.jpeg' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
   Human potential, mechanically evolved.
  </div>

  </div>
      </SwiperSlide>
          <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/18799047/pexels-photo-18799047.jpeg' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
  The Future is Mindful.
  </div>

  </div>
      </SwiperSlide>
          <SwiperSlide className=' cursor-pointer'>
        <img src='https://media.istockphoto.com/id/1654943682/photo/advanced-high-precision-robot-arms-on-fully-automated-pcb-assembly-line-inside-modern.jpg?b=1&s=612x612&w=0&k=20&c=XQB7hv9ro8Zkk68uo8cnTNL7mUzvN1KZ9PMaTmwMSF4=' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
  Beyond Automation. Humanoid Excellence.
  </div>

  </div>
      </SwiperSlide>
          <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/29393022/pexels-photo-29393022.jpeg' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
Privacy First. Intelligence Always.
  </div>

  </div>
      </SwiperSlide>
          <SwiperSlide className=' cursor-pointer'>
        <img  src='https://images.pexels.com/photos/5895399/pexels-photo-5895399.jpeg' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
   Intelligence with a Heart.
  </div>

  </div>
      </SwiperSlide>
          <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/6019019/pexels-photo-6019019.jpeg' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
   Bridging Human Intent and Robotic Action.
  </div>

  </div>
      </SwiperSlide>
          <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/8566622/pexels-photo-8566622.jpeg' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
   Your Daily Life, Automated.
  </div>

  </div>
      </SwiperSlide>
  <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/34718926/pexels-photo-34718926/free-photo-of-industrial-factory-interior-with-conveyor-belt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
   Bridging Human Intent and Robotic Action.
  </div>

  </div>
      </SwiperSlide>
      
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/8438964/pexels-photo-8438964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
<div className='flex gap-2 left-5 bottom-10 px-4 py-2 z-10 absolute items-center'>
  <div className=" font-bold bottom-10 left-4 z-10 bg-blue-600 text-white px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>
  <div className=" text-[18px] font-bold    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
   <div className=" text-[18px] font-bold    text-white  shadow-md rounded-[30px]">
   Your Daily Life, Automated.
  </div>

  </div>
      </SwiperSlide>
      

      ...
    </Swiper></div>
   <div className='Margin-Slider'><Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      centeredSlides={true}
     
      spaceBetween={5}
       loop={true}
   
      slidesPerView={3.5}
      navigation={{clickable:true}}

      pagination={{ clickable: true }}
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect={'creative'}
      grabCursor={true}
  
    >
           <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/4108205/pexels-photo-4108205.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
          <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/5083221/pexels-photo-5083221.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/7230960/pexels-photo-7230960.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/16423102/pexels-photo-16423102.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/6011605/pexels-photo-6011605.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/6388374/pexels-photo-6388374.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/4893862/pexels-photo-4893862.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/11198232/pexels-photo-11198232.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>
       <SwiperSlide className=' cursor-pointer'>
        <img src='https://images.pexels.com/photos/20339629/pexels-photo-20339629.jpeg' />
<div className='flex gap-2 right-2 bottom-5 px-4 py-2 z-10 absolute items-center'>
  
  <div className=" text-[18px]    text-white shadow-md rounded-[30px]">
    The Visionary.  
  </div>
  
  <div className=" font-bold bottom-10 left-4 z-10 bg-white text-gray-700  px-4 py-2 shadow-md rounded-[30px]">
    Details
  </div>

  </div>
      </SwiperSlide>

      ...
    </Swiper></div>



    </div>
  )
}

export default Entertainment
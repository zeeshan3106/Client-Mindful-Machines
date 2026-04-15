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
import './Category.css'



function CateSlider2() {
  return (
    <div className='CateSlider2 mt-0 mb-0 pb-0 pl-0 '>
      <div className='container flex gap-1 ml-0 Mobile-Gap-CAte'>
      

        
 
          <Link className='Link w-[10%] MobileCAtegoryWidth'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='   item1 shadow-md rounded-md flex items-center justify-center'>
            <div className=''>
       </div>
            <div className='font-sizes-Category '>Health</div>
          </div>
             


</Link>

 
 
      <Link className='Link w-[10%] MobileCAtegoryWidth'  onClick={()=>{localStorage.setItem("item","AI Powered Wellness Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md flex items-center justify-center'>
       
            <div className=''>Wellness</div>
          </div>
             


</Link>
          
 
 
               <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Home Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md flex items-center justify-center'>
     
            <div>Home Devices</div>
          </div>
             


</Link>
 
 
              <Link className='Link w-[11%] MobileCAtegoryWidth'  onClick={()=>{localStorage.setItem("item","AI Powered Drones")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md flex items-center justify-center'>
         
            <div>AI Drones</div>
          </div>
             


</Link>
 
      <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Humanoid Robots")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md flex items-center justify-center'>
    
            <div>Humanoid Robots</div>
          </div>
             


</Link>
 
               <Link className='Link'  onClick={()=>{localStorage.setItem("item","AI Powered Industrial Robots")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md  flex items-center justify-center'>
       
            <div>Industrial Robots</div>
          </div>
             


</Link>
 
 
               <Link className='Link w-[10%] MobileCAtegoryWidth'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md flex items-center justify-center'>
     
            <div>Popular</div>
          </div>
             


</Link>
 
 
              <Link className='Link MobileCAtegoryWidth  w-[10%]'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md flex items-center justify-center'>
    
            <div>Latest</div>
          </div>
             


</Link>
 
 
               <Link className='Link  w-[10%] MobileCAtegoryWidth'  onClick={()=>{localStorage.setItem("item","AI Powered Health Devices")}}  to="/Product">  
          <div className='item1 shadow-md rounded-md flex items-center justify-center'>
        
            <div>Featured</div>
          </div>
             


</Link>
 
      








</div>
    </div>
  )
}

export default CateSlider2
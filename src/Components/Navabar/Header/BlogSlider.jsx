import './PopularSlider.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';
import BlogItem from './BlogItem';



function BlogSlider() {
  return (
   <div className='Slider'>
    <div className='BlogSlides'>

                <Swiper

              





        slidesPerView={2}
    
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper">
       
            <SwiperSlide>
               <BlogItem/>
            </SwiperSlide>
            
             <SwiperSlide>
                <BlogItem/>
            </SwiperSlide>

             <SwiperSlide>
                 <BlogItem/>
            </SwiperSlide>

 <SwiperSlide>
                 <BlogItem/>
            </SwiperSlide>
             <SwiperSlide>
               <BlogItem/>
            </SwiperSlide>
 <SwiperSlide>
            <BlogItem/>
            </SwiperSlide>


 <SwiperSlide>
        <BlogItem/>
            </SwiperSlide>
 <SwiperSlide>
                <BlogItem/>
            </SwiperSlide>

 <SwiperSlide>
        <BlogItem/>
            </SwiperSlide>

 <SwiperSlide>
               <BlogItem/>
            </SwiperSlide>





            

       

        </Swiper>
              
            
            
            
            
        </div>
          
            
           



    </div>
  )
}

export default BlogSlider
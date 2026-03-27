
import './PopularSlider.css';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';

import axios from 'axios'


function LatestSlider({category}) {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const selected = localStorage.getItem("item") || "";

    axios.get('http://localhost:8000/api/products/SearchItemlatest', {
    
      params: { categoryid: (category.length>0)? category :"AI Powered Health Devices"


      }
    })
    .then(res => setProducts(res.data.data))
    .catch(err => console.log(err));
  }, [category]);
  console.log(products)
  return (

<div className='Slider'>
      

                <Swiper
        slidesPerView={5}
        spaceBetween={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper w-[1200px] h-[600px]">
         
         
            {products.map((item) => (
            <SwiperSlide>
                 <ProductItem   product={item}/>
            </SwiperSlide>
          


            
))}
           

        </Swiper>
              
            
            
            
            
            
            
           



    </div>
       
  )
}

export default LatestSlider
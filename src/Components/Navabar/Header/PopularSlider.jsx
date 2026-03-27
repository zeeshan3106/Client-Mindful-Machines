
import './PopularSlider.css';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';

import axios from 'axios'


function PopularSlider({category}) {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
  const apple1 =  localStorage.setItem("New Items","AI Powered Drones")
    const token = localStorage.getItem("token");
    const selected = localStorage.getItem("item") || "";
 const categoryw= localStorage.getItem("New Items");
    axios.get('http://localhost:8000/api/products/SearchItemhome', {
    
      params: { categoryid:(category.length > 0)? category:"AI Powered Drones"
        



      }
    })
    .then(res => setProducts(res.data.data))
    .catch(err => console.log(err));
  }, [category]);
  console.log(products)
  return (

<div className='Slider  '>
      

                <Swiper
        slidesPerView={5}
        spaceBetween={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper  bg-white w-[1290px] h-[600px]">
   console.log(products)

          {products.map((item) => (
            <SwiperSlide>
              
                 <ProductItem product = {item}/>

              
                 
            </SwiperSlide>
           
))}

            

           

        </Swiper>
              
            
            
            
            
            
            
           



    </div>
       
  )
}

export default PopularSlider
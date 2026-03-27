import './PopularSlider.css';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';

import axios from 'axios'
function FeaturedsLider({category}) {

     const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const selected = localStorage.getItem("item") || "";

    axios.get('http://localhost:8000/api/products/getbycategory', {
    
      params: { categoryid: (category.length > 0)? category:"AI Powered Humanoid Robots"
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
        className="mySwiper w-[1500px] h-[600px]">
         
         
            {products.map((item) => (
            <SwiperSlide>
                 <ProductItem product={item}/>
            </SwiperSlide>
          
        
))}



            

           

        </Swiper>
              
            
            
            
            
            
            
           



    </div>
  )
}

export default FeaturedsLider
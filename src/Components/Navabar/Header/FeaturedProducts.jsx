import './Featured.css'
import './Popular.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './PopularSlider.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';
import LatestSlider from './LatestSlider';
import FeaturedsLider from './FeaturedsLider';





function FeaturedProducts() {

  const [apple, setapple]=useState([])
  const [value, setValue] = useState(1);

  const handleChange = (event, value) => {
    setValue(value);
  
      setapple(value)
     const apple1 =  localStorage.setItem("New Items",value)
   


  };




  return (
  <div className='all h-[750px]'>
    <div className='Featured'>

    <div className='Pop'>

    <div >
        <h3>Featured Products</h3>
        <p className='desc  Mobie-Text-Responsive '>Explore our lastest collection of 2026</p>
    </div>
    

    
     <div className="right-sec">
         <Box sx={{width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
          <Tab label="Health" value="AI Powered Health Devices" />
<Tab label="Wellness" value="AI Powered Wellness Devices" />
 <Tab label="Drones" value="AI Powered Drones" />
 <Tab label="Home" value="AI Powered Home Devices" />
<Tab label="Humanoid" value="AI Powered Humanoid Robots" />
 <Tab label="Industrial" value="AI Powered Industrial Robots" />
      </Tabs>
    </Box>








     </div>
    
     
   

    
    
    </div>
<div className='our'>
    
    </div>
</div>



    <FeaturedsLider items={5}   category={apple}  />







    </div>
  )
}

export default FeaturedProducts
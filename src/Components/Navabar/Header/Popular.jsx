import React, { useState } from 'react'
import './Popular.css'
import PopularSlider from './PopularSlider'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';








function Popular() {
    
  const [apple, setapple]=useState([])
  const [value, setValue] = useState(1);

  const apple1 =  localStorage.setItem("New Items","AI Powered Health Devices")
   

  const handleChange = (event, value) => {
    setValue(value);
  
      setapple(value)
     const apple1 =  localStorage.setItem("New Items","AI Powered Health Devices")
   


  };




  const onclick=()=>{

    const value1 = e.target.label

    alert(value1)


  }


   console.log(value)
  return (
    <div className='all  h-[750px] mobilepopular'>


    <div className='Pop '>

    <div >
        <h3>Popular Products</h3>
        <h7 className='desc Mobie-Text-Responsive '>Dont miss the Opportunity until March 2026</h7>
    </div>
    

    
     <div className="right-sec ">
         <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
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
<div className='our h-[]'>
    
    </div>
    <PopularSlider items={5}  category={apple}       />
    </div>
  )
}

export default Popular
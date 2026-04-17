import React, { useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'

import Search from './Search';
import Slider from './Slider'
import CateSlider from './CateSlider'
import Offer from './Offer'
import Popular from './Popular'
import AdsBanner from './AdsBanner';
import Product from './Header1'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { FaHistory } from "react-icons/fa";

import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiDeviceRotateBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Navbar from './Navbar';
import LatestProducts from './LatestProducts';
import AdsBanner2 from './AdsBanner2';
import FeaturedProducts from './FeaturedProducts';
import AdsBanner3 from './AdsBanner3';
import logo from './Images/Banners/logo.jpg'
import Blog from './Blog';
import Benefits from './Benefits';
import Products, { appleContext } from '../../../Pages/Products/Products';
import Cart from '../../../Pages/Cart/Cart';
import { Avatar, Button, Card, CardContent } from '@mui/material';
import Cartbar from '../../../Pages/Cart/Cartbar';


import { MyContext } from '../../../App';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from '../../../Pages/Footer/Footer';
import Team from './Team/Team';
import ReasonsToChoose from './Reasons/ReasonsToChoose';
import Entertainment from './Entertainment/Entertainment';













function Header() {






const [userdata, setdata] = useState([])

  const [islogin, setislogin]=useState(false)
useEffect( (e)=>{

  try{
const token = localStorage.getItem("token")
    axios.get('https://backend-mindful-machines-44vc.vercel.app/api/frontend/getprofiles',
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }



    ).then(res => {
     
      setdata(res.data.data)
   
    })
    .catch(err => console.log(err))


  }
  catch(error){console.log(error)}



})

const [size , setsize]=useState(false)

useEffect(()=>{

  const CheckSize = ()=> setsize(window.innerWidth<=800)
   
  CheckSize();

  window.addEventListener('resize',CheckSize)

  return () => window.removeEventListener('resize', CheckSize);



},[])
console.log(size)








  const context = useContext(MyContext )
  return (
<header>

     <div className='strip'>
       <div className='container'>
   
             <div className='element-1'> 
              <p className='deal'>
        {size
          ? "50% Off! Limited offer." 
          : "Its your best chance to get 50% off delightful products, Limited offer"
        }
      </p>
         
       </div>
                    <div className='element-2'> 
                          <ul className='flex gap-3 items-center mb-4 element-items'>
                            <li className='font-bold'>
                             <Link to = "/Contact"  className='link'> Help Center</Link>
                              </li>
                          
                            <li>

                            <Link to ="/Feedback" className='link font-bold' link >Order History</Link>
                           
                            </li>
                             
                        </ul>






  
    
     </div>

    </div>



       </div>

    <div className='header w-full'>
       <div className='container-head'>
      
        <div className='w-[20%] col1' >
              <Link to = {"/Home"} className='frontmobileimage' > 
               <img src= {logo}/>
               
               </Link>

        </div>
         <div className='w-[60%] Col-2'>
         <Search/>
         
         </div>
          <div className=' w-[20%] col3 gap-20 items-center mobilefrontlogo '>
        
   
            <li className='login '>

              <div className='pl-10 flex bg-blue gap-3 items-center justify-center cart mobilefrontlogo '>

              
<div className=' cart-theme'>
                  <Link to="/Login" className='link1 '><CgProfile className='homelogo'/></Link>
</div>
              <li className='cart cart-theme'>
   <Link to="/Login" className='link1'><FaRegHeart  className='homelogo'/></Link>
   
   
   
</li>

 <div className=' cart-theme'>
  <Link to="/Login">
   
   <button className='link1'   

  


   
   ><FaCartArrowDown  className='homelogo' /></button>

           </Link>  </div>

</div>
              
            
            </li>
          
        

         
            </div>  
         
         
       </div>
    </div>
    <div>
      <Navbar/>
    </div>
  <div>
  <Slider/>
    </div>

<div>
<CateSlider/>
</div>


<div>
<Popular/>
</div>



<div>
<AdsBanner/>
</div>




<div>
<LatestProducts/>
</div>


<div>
<ReasonsToChoose/>
</div>





<div>
<AdsBanner2/>
</div>


<div>
<FeaturedProducts/>
</div>



<div>
<Offer/>
</div>


<div>
  <Team/>
</div>

<div className='flex justify-center font-bold text-[25px] mt-4 ]'>Our Reviews. </div>
<diV className="flex justify-center Cards-Container-Reviews gap-4 Mobile-Review-Card " >
<div className='flex w-[25%] Card-Review-Hover ' >  <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Rating value={5} readOnly size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
         
            <Typography variant="caption" fontWeight="bold">Verified</Typography>
          </Box>
        </Box>

      
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
          The Clinical/Professional Choice
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
          "Integrating the Ezra AI Full-Body MRI with my daily Mindful Bio-Scanner has completely changed how I view my health. This machinery detected a microscopic vascular anomaly during a routine scan that my regular checkups missed, allowing for a preventative 'Smart-Stent' procedure that literally saved my life before I ever felt a single symptom."
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem', mr: 1.5 }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzJbZvLOWf4XWxfzTLqDRMScWMv-76MDvww&s" />     </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Oliver
            </Typography>
            <Typography variant="caption" color="text.disabled">
              April 2026
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card></div>
    <div className='flex w-[25%] Card-Review-Hover' >  <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
        {/* 1. Stars and Verification */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Rating value={5} readOnly size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
         
            <Typography variant="caption" fontWeight="bold">Verified</Typography>
          </Box>
        </Box>

       
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
         The "Smarter, Not Harder" Choice
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
         "As a software engineer, my 12-hour coding sprints used to leave me burnt out and physically drained. Integrating the Mindful S-Series Humanoid with my Apollo SmartVibes Wearable has completely redesigned my workflow."
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem', mr: 1.5 }}>
            <img src='https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-1/631423583_3131113347278289_5358598644930764548_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGThP5JzWnendwxAd-JW4E_tuCC2cS3afC24ILZxLdp8OACO8-fD7nFjolOMgYEHmFf8Sgfa6uD4EBMd8vyAAk1&_nc_ohc=KnmeoEad86UQ7kNvwEGBAhE&_nc_oc=AdrQdqlvBcZpAcLx9q-l2HLuvzM93MOuFjqGn1pNoIn0Dps1JkWzG9dFp2E17D6EWiQ&_nc_zt=24&_nc_ht=scontent.flyp6-1.fna&_nc_gid=Fh2YQ3UU5tORT_S6f-Xvzg&_nc_ss=7a3a8&oh=00_Af3rlyPEIdaPTzpEPuEt_CoaTnAbMPv8qFpUtR92V7O5Og&oe=69E7A0BF' />
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
             Hamza Amjad
            </Typography>
            <Typography variant="caption" color="text.disabled">
              April 2026
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card></div>


     <div className='flex w-[25%] Card-Review-Hover' >  <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Rating value={5} readOnly size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
         
            <Typography variant="caption" fontWeight="bold">Verified</Typography>
          </Box>
        </Box>

       
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
          When AI Gains a Sense of Touch.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
          "We replaced our traditional hydraulic arms with the Mindful Machines Assembly Unit. The 'Mindful' AI isn't just a marketing name, it actually predicts component misalignments before they happen."
        </Typography>

    
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem', mr: 1.5 }}>
       <img src='https://scontent.flyp6-2.fna.fbcdn.net/v/t39.30808-1/270014550_4606601809459273_3678810591705286430_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGKnT_qP_YiRZtljkExL-nGBNZaAZSzlFgE1loBlLOUWCywxSkKqdmPEeKrQrVlWTmcvysSFFmVf9HRD0LOugAs&_nc_ohc=kJnjcRfzkYUQ7kNvwFwjV-X&_nc_oc=Ado0a6CJcqYkYru-1xUtH-_0i-xLpM4eYR2c9J_aiZeqgcGgoh8BwvQIYkcppWijtMc&_nc_zt=24&_nc_ht=scontent.flyp6-2.fna&_nc_gid=k1q7LaHSK_GRgg-dV7I7kw&_nc_ss=7a3a8&oh=00_Af0q5xVKgH_bucskXOHTV6SGyb0c_NqoQr3Dg6DxlAhteQ&oe=69E7A937' />   
       </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Awais Mughul
            </Typography>
            <Typography variant="caption" color="text.disabled">
              April 2026
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card></div>

     <div className='flex w-[25%] Card-Review-Hover' >  <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Rating value={5} readOnly size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
         
            <Typography variant="caption" fontWeight="bold">Verified</Typography>
          </Box>
        </Box>

       
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
          When a Machine Becomes Family.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
        "From cooking five-star meals to driving the office run and managing my garden, this robot handles it all with human-like grace. It’s no longer just a machine; it’s the heartbeat of my home and the king of 2026 tech."
        </Typography>

    
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem', mr: 1.5 }}>
           <img src="https://scontent.flyp6-2.fna.fbcdn.net/v/t39.30808-1/565743057_1859135178341984_4063089310083761520_n.jpg?stp=c0.0.1080.1080a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE4aBPt1zwBEXR-nR8jy8K8ThGi2p61BVhOEaLanrUFWMSZx4AlxtT9YU2DbYk1slVOXjsEcboA8V1e4zuSq77a&_nc_ohc=Bh4jCDg7XawQ7kNvwEGyn_T&_nc_oc=AdqRrcJGZ2YsFj0EaGPVMXDBdt0AyvV12aRQ4Y98DKfqfHoK_L9RHVYczSP6psSqzc8&_nc_zt=24&_nc_ht=scontent.flyp6-2.fna&_nc_gid=v0U-X2ita35_werafBAuaQ&_nc_ss=7a3a8&oh=00_Af1LYX2rjyZIfIVsDyTuVd5ZxPfP5zfIsLYqtCIsz8DIzg&oe=69E7C3D7" />
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
           Muhammad Shoaib Iqbal
            </Typography>
            <Typography variant="caption" color="text.disabled">
              April 2026
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card></div>
     <div className='flex w-[25%] Card-Review-Hover' >  <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Rating value={5} readOnly size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
         
            <Typography variant="caption" fontWeight="bold">Verified</Typography>
          </Box>
        </Box>

       
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
          The New Face of Property Sales.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
          "A robot like the Mindful S-Series meets the client at the door, provides a guided tour, and uses its vision-language model to answer complex questions about the property's materials, history, and local zoning laws."
        </Typography>

    
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem', mr: 1.5 }}>
           <img src="https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-1/431579584_388484914115137_8086569179754336696_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGNSudJ1q1jHdTBQCOZeUiUwHBEvTK4XXbAcES9MrhddiMqoce_oSK2jKZ4skz_WaEIdBvpxAFKwS7Jzpnd39Fv&_nc_ohc=cnMXFM7Q3GgQ7kNvwFZoj2u&_nc_oc=Adp3tNscCDNwH3dQXPB5R0LzFJsb1NVbi8iQvBrrdLtdBm48mtuSnLH_E74S2kM4zlM&_nc_zt=24&_nc_ht=scontent.flyp6-1.fna&_nc_gid=djWZGzQJ5gjboP3c_JXfyQ&_nc_ss=7a3a8&oh=00_Af0oBx60XUd9GCJXM0-5bSxZ98LvT-x-kq1xifycdMVQMA&oe=69E7AE8D" />
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Sheikh Ashiq Rizvi
            </Typography>
            <Typography variant="caption" color="text.disabled">
              April 2026
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card></div>



      <div className='flex w-[25%] Card-Review-Hover' >  <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Rating value={5} readOnly size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
         
            <Typography variant="caption" fontWeight="bold">Verified</Typography>
          </Box>
        </Box>

       
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
          10 Minutes to Success.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
         "Opening a corporate account used to take days of paperwork. The Mindful S-1 handled my biometric KYC, scanned my documents with its high-res vision, and had my digital cards issued in under 10 minutes. It’s the fastest branch experience I have ever had."
        </Typography>

    
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem', mr: 1.5 }}>
           <img src="https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-1/647690146_1467138374998676_3258449909723358730_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeElQWJQ-WJfWwU6BJ7dSV8Mmw6Dufp9bembDoO5-n1t6X4O594hKbBUGKGU4gSebOv62ZJi2CCJkBflDsoBmIis&_nc_ohc=wGzSXm5BIGsQ7kNvwF34Vqy&_nc_oc=Adpb0HpqcnPHtfHR0C3i1tNeyEUGD8b5AXhNJHuQwUwz8p_i-wHgECwbbjY3_58gLGc&_nc_zt=24&_nc_ht=scontent.flyp6-1.fna&_nc_gid=nSeGqeKthns-BWd58Vpm4Q&_nc_ss=7a3a8&oh=00_Af2JMbhkCBqyR0weefLqnYzr7VmgEjjtXFManG0ksn-aLQ&oe=69E79FDA" />
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
           Bilal Afzal
            </Typography>
            <Typography variant="caption" color="text.disabled">
              April 2026
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card></div>
</diV>

<div>
  <Entertainment/>
</div>


<div>
  <Benefits/>

</div>
<div>

  <Footer/>

</div>



</header>
  )
}

export default Header
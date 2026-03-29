import React, { useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import logo from './Images/Banners/logo.jpg'
import Search from './Search';
import Slider from './Slider'
import CateSlider from './CateSlider'
import Offer from './Offer'
import Popular from './Popular'
import AdsBanner from './AdsBanner';

import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiDeviceRotateBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Navbar from './Navbar';
import LatestProducts from './LatestProducts';
import AdsBanner2 from './AdsBanner2';
import FeaturedProducts from './FeaturedProducts';
import AdsBanner3 from './AdsBanner3';

import Blog from './Blog';
import Benefits from './Benefits';
import Products from '../../../Pages/Products/Products';
import Cart from '../../../Pages/Cart/Cart';
import { Button } from '@mui/material';
import Cartbar from '../../../Pages/Cart/Cartbar';


import { MyContext } from '../../../App';
import { useEffect } from 'react';
import axios from 'axios';



function Product() {
  
const [state,setstate]=useState([])


  const [islogin, setislogin]=useState(false)

  const context = useContext(MyContext )




useEffect( (e)=>{
  const token = localStorage.getItem("token")
   axios.get('http://localhost:8000/api/frontend/getprofiles',
    {
      headers:{
        Authorization: ` Bearer ${token}`
      }
    }

   ).then(res =>
    { console.log(res.data.data)
    setstate(res.data.data[0])
    
    
})
    .catch(err => console.log(err))
  },[])





  return (
<header>

     <div className='strip'>
       <div className='container'>
   
             <div className='element-1'> 
                   <p className='deal'>Its your best chance to get 50% off delightful products,Limited offer</p>
                   </div>
                    <div className='element-2 '> 
                          <ul className='flex items-center gap-4'>
                            <li className='list'>
                             <Link to = "help-center"  className='link'> Help Center</Link>
                               </li> 
                            
                            <li className='list'>

                            <Link to ="order-his" className='link' link >Order History</Link>
                           
                         
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
          <ul className='Options'>
   
            <li className='login '>

              <div className='pl-10 flex bg-blue gap-3 items-center justify-center cart mobilefrontlogo '>

              
<div className=' cart-theme'>
                  <Link to="/Profile" className='link1 '><CgProfile className='homelogo'/></Link>
</div>
              <li className='cart cart-theme'>
   <Link to="/wishlist" className='link1'><FaRegHeart  className='homelogo'/></Link>
   
   
   
</li>

 <div className=' cart-theme'>
   
   <button className='link1'   
   onClick={()=>context.setOpenDrawer(true)}  


   
   ><FaCartArrowDown  className='homelogo' /></button>

             </div>

</div>
              
            
            </li>
            </ul>
        

         
            </div>  
         
         
       </div>
    </div>
    <div>
      <Navbar/>
    </div>
 


</header>
  )
}

export default Product
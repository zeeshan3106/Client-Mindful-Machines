import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import instagram from './instagram.png'
import linkedin from './linkedin.png'

import { FaArrowRightLong } from "react-icons/fa6";
function Footer() {
  return (
    <div className='Footer w-[100%] h-[604px] '>


        <div className='text-white p-5 font-bold text-[30px] MArgin-Footer bg-blue-950'> Mindful Machines</div>
  <div className='flex  '>

    <div>
       <div className='text-white font-bold p-5  pb-0 text-[18px]'>
           </div>
 
            <div className='text-white  p-5 pt-0 flex flex-col gap-4 font-bold text-[20px]'>
                 <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white FooterLink hover:text-[#396dac] '>
               <div className='flex items-center gap-2'>  <div className='text-blue-400'><FaArrowRightLong /></div>
                 <div>About us</div></div></div> </Link>    
                     <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white FooterLink hover:text-[#396dac] '>
               <div className='flex items-center gap-2'>  <div className='text-blue-400'><FaArrowRightLong /></div>
                 <div>Careers</div></div></div> </Link> 
                      <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white FooterLink hover:text-[#396dac] '>
               <div className='flex items-center gap-2'>  <div className='text-blue-400'><FaArrowRightLong /></div>
                 <div>Contact us</div></div></div> </Link> 
                        <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white FooterLink hover:text-[#396dac] '>
               <div className='flex items-center gap-2'>  <div className='text-blue-400'><FaArrowRightLong /></div>
                 <div>Locations</div></div></div> </Link> 
</div>
</div>







    <div>
        <div className='text-white font-bold p-5 pb-0 text-[18px]'>
            Products</div>
            <div className='text-white p-5 pt-0 flex flex-col gap-2 pt-4 font-bold'>
                    <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white'>AI Health Devices</div></Link> 
                <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white'>AI Wellness Devices</div></Link>
              <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white'>AI Home Devices</div></Link>
               <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white'>AI Humanoid Robots</div></Link>
               <Link className='FooterLink hover:text-[#ABBED5]'> <div className='text-white'>AI Industrial Robots</div></Link>
</div>
</div>


<div>
 <div className='text-white font-bold p-5 pb-0 text-[18px]'>
           Contact Details</div>
            <div className='text-white p-5 pt-3 '>
                 <Link><div className='text-white flex gap-2 font-bold '>Pakistan<div className='Numbers-Footer'>0309-8789844</div> </div></Link>    
             <Link><div className='text-white flex gap-2 font-bold'>International<div className='Numbers-Footer'>+92-309-8789844</div></div></Link>    
             <Link> <div className='text-white font-bold pt-4'><div className='text-[18px]'>Address</div></div><div className='text-white '>
              1 Melbourne Street
              
              </div>
              <div className='text-white '>Capital Territory</div>
                 <div className='text-white '>Islamabad, 40000</div>
                   <div className='text-white '>Pakistan</div>
              
              </Link>    
              <Link> <div className='text-white font-bold'>Locations</div></Link>    
             
</div>
</div>
<div>
 <div className='text-white font-bold p-5 pb-0 text-[18px]'>
           Connect</div>
           <div className='flex gap-3 items-center pt-2 justify-center pt-2'>
            <div className='w-[10%]'>
              <a href='Https://www.facebook.com/profile.php?id=100015850997278'>
            <img className='max-w-[23px]'  src='https://logo.svgcdn.com/logos/facebook.png'/>

           </a>
            
            </div>
           
               <div  className='w-[10%]'>
                <Link to="Https://www.instagram.com/zeeshan.ali.zafar?igsh=MWExMmhvZnB5eno0bA=="><img className='max-w-[28px]' src={instagram}/></Link> </div> 
                <div  className='w-[10%]'> <Link to="https://www.linkedin.com/in/zeeshan-ali-zafar-22103b250">  <img className='max-w-[23px]' src={linkedin}/> </Link></div> 
                  
           </div>

           <div></div>
    
</div>
<div>
 <div className=' text-white font-bold p-5 pb-2 text-[18px]'>
           Support</div>
            <div className='text-white p-5 pt-0'>
                 <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white hover:text-[#ABBED5]'>System Assistance</div></Link>    
             <Link className='FooterLink hover:text-[#ABBED5]'><div className='text-white'> Neural Community</div></Link>    
             <Link className='FooterLink hover:text-[#ABBED5]'> <div className='text-white'>Logic FAQ's</div></Link>    
              <Link className='FooterLink hover:text-[#ABBED5]'> <div className='text-white'></div></Link>    
              <Link className='FooterLink hover:text-[#ABBED5]'>  <div className='text-white'>Team</div></Link>    
</div>
</div>


</div>


<div className=' bg-[#00082a] font-bold h-[100px] p-5'>
  <div className='flex text-white gap-2 underline text-[13px] '>
    <Link className='text-white'>  <div >Terms Privacy</div></Link>
<Link className='text-white'>  <div >Accessability</div></Link>
<Link className='text-white'>  <div >AI Ethics & Safety</div></Link>
<Link className='text-white'>  <div >Privacy</div></Link>
<Link className='text-white'>  <div ></div></Link>

  </div>
  
  </div>


    </div>
  )
}

export default Footer
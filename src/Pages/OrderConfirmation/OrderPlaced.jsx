import React from 'react'
import './OrderPlaced.css'

import Footer from '../Footer/Footer'
import Benefits from '../../Components/Navabar/Header/Benefits'

import Product from '../../Components/Navabar/Header/Header1'
import Navbar from '../../Components/Navabar/Header/Navbar'
import img from './eee0e512-a73b-4560-a52c-71aaded042c7-removebg-preview-removebg-preview.png'

import {Link} from 'react-router-dom'


function OrderPlaced() {
  return (
    <div>


<Navbar/>


<div className=' flex justify-center Order-c '>

  <div className='w-[90%]    p-5 pt-2  flex justify-center mobile-order-sum '>
   
    <div >
       <div className='  w-[100%] flex justify-center '>
        <div className='w-[30%] ROUNDED-MD shadow-md'><img  src={img}/></div>
       </div>
<div className='flex flex-col items-center pt-0 '>
  
    <div className='text-[30px] font-bold ODPL-Text'>Thank You For Your Purchase. </div>
 <div className='text-[14px] font-bold text-gray-500 mobile-decs-order'>We've Recieved Your Order will ship in 5-10 Bussiness Days </div>
 <div className='text-[14px] font-bold text-gray-500 mobile-decs-order'>Your Order Id is #123456 </div>



</div>

<div>

  <div className='bg-white p-4 w-[100%] mt-5 font-bold shadow-md rounded-md Mobile-Order-Summary'>
    
   <div className='font-bold text-[20px] pb-3  '> Order Summary</div>
  
   <div className='flex gap-8 text-gray-400 pb-2 items-center pt-2 border-b w-[100%]'>
     <div>
      <img className='w-[35px]' src={img}/>
     </div>
     <div className='ml-[-20]'>
     <div>AI Powered Humanoid Robot</div>
      <div className='text-gray-400 text-[12px]'>Quantity:3</div></div>
     <div className='text-black text-[12px]'>10000$</div></div>

        <div className='flex gap-8 text-gray-400 pb-2 items-center pt-2 border-b w-[100%]'>
     <div>
      <img className='w-[35px]' src={img}/>
     </div>
     <div className='ml-[-20]'>
     <div>AI Powered Humanoid Robot</div>
      <div className='text-gray-400 text-[12px]'>Quantity:3</div></div>
     <div className='text-black text-[12px]'>10000$</div></div>


        <div className='flex gap-8 text-gray-400 pb-2 items-center pt-2 border-b w-[100%]'>
     <div>
      <img className='w-[35px]' src={img}/>
     </div>
     <div className='ml-[-20]'>
     <div>AI Powered Humanoid Robot</div>
      <div className='text-gray-400 text-[12px]'>Quantity:3</div></div>
     <div className='text-black text-[12px]'>10000$</div></div>
  

    
    </div>
<div className='flex justify-center pt-4'>
     <button className='bg-blue-700 flex justify-center text-white p-3 Order-s-Btn rounded-md shadow-md cursor-pointer'>
                                  <div className='text-[10px] font-bold '> </div>
                                  <div className=''> <Link  className="text-white font-bold text-[12px]" to="/Home">Continue Shopping</Link></div>
                                </button>

</div>
  
</div>


</div>


<div></div>
  </div>
  










</div>

      



     

     <Benefits/>







      






      <Footer/>




      




    </div>
  )
}

export default OrderPlaced
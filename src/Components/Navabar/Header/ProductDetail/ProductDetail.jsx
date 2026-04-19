import React from 'react'
import Navbar from '../Navbar'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ProductDetail.css'
import Benefits from '../Benefits';
function ProductDetail() {
  return (
    <div>
        <Navbar/>
        <div>

            <div className='h-[600px] overflow-hidden object-cover'>
                   <img className='w-[100%]   '
             src='https://media.istockphoto.com/id/2154101440/photo/metal-hand-of-humanoid-robot-is-holding-at-its-fingertips-innovative-and-advanced-ai.jpg?s=1024x1024&w=is&k=20&c=b1ONJup9FoEu8vRnJ83IfVJMUA4e-lNR6mgRpuxccD8=' />
          
           </div>

            <div className='absolute top-50 flex justify-center gap-2  w-[100%]'>
            
                     <Button className='shadow-md' sx={{width:'20ch',height:'6ch',
                             backgroundColor:'blue',
                             color:'white',
                             borderRadius:'20ch'
                        
                     }} variant="">Buy Now</Button>
                 <Button  sx={{width:'20ch',height:'6ch',
                             backgroundColor:'transparent',
                             color:'black',
                             borderRadius:'20ch',
                             boxShadow:'inherit',
                          backgroundColor:'white',
                             color:'black',
                             borderRadius:'20ch'
                        
                     }} >Add To Cart</Button>

            </div>
            <div className='text-[40px] font-bold text-white absolute top-45 w-[100%] items-center  flex flex-col justify-center'>
                
                <div>Model H-01</div>

                    <div className='underline text-[18px] Underline-text'>Buy Now For 12k USD</div>
        </div>


        <div className='flex justify-center text-[30px] mt-4 font-bold '>Modern & AI-Focused.</div>
            </div>



<Benefits/>
        
    </div>
  )
}

export default ProductDetail
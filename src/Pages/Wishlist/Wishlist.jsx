import React, { useEffect, useState } from 'react'
import './Wishlist.css'

import Header from '../../Components/Navabar/Header/Header'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import { Link } from 'react-router-dom'


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import img1 from './Components/1.jpg'
import { Button, IconButton } from '@mui/material'
import ProductItem from '../../Components/Navabar/Header/ProductItem'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import Footer from '../Footer/Footer'



import DeleteIcon from '@mui/icons-material/Delete';





function Wishlist() {


  const [thipage , setthispage]=useState()

  const [page , setpage]=useState()

  const onChnagePage = (event , value)=>{

    setthispage(value)
    console.log(value)
    localStorage.setItem('page',value)
    

    const token = localStorage.getItem("token")
 const currentPage = localStorage.getItem('page')
  axios.get('https://backend-mindful-machines-44vc.vercel.app/api/wish/wishGet',
   {
    headers:{
      Authorization:`Bearer ${token}`
    },
    params:{
      page:currentPage

    }
   }

  




  ).then(res =>{


    setwishget(res.data.data)
     settotalwish(res.data.totalwish)
     setpage(res.data.totalpages)



  }).catch(err => err)

  }




  const onDelete = async(_id) =>{

const token = localStorage.getItem("token")


   await axios.delete(`${import.meta.env.VITE_API_URL}/api/wish/deleteWish`,
      {
        params:{
          _id:_id
        }
      }


    )
    .then(res => res).catch(err => err)



 const currentPage = localStorage.getItem('page')
 await axios.get(`${import.meta.env.VITE_API_URL}/api/wish/wishGet`,
   {
    headers:{
      Authorization:`Bearer ${token}`
    },
    params:{
      page:currentPage,


    }
   }

  




  ).then(res =>{


    setwishget(res.data.data)
     settotalwish(res.data.totalwish)
     setpage(res.data.totalpages)



  }).catch(err => err)


  }







const [currentpage , setcurrentpage] =useState()

  
const [wishget, setwishget]=useState([])

const [totalwish , settotalwish]=useState(0)

useEffect(()=>{

const token = localStorage.getItem("token")
 const currentPage = localStorage.getItem('page')
  axios.get(`${import.meta.env.VITE_API_URL}/api/wish/wishGet`,
   {
    headers:{
      Authorization:`Bearer ${token}`
    },
    params:{
      page:currentPage,


    }
   }

  




  ).then(res =>{


    setwishget(res.data.data)
     settotalwish(res.data.totalwish)
     setpage(res.data.totalpages)



  }).catch(err => err)



},[])



console.log(wishget)



  const [list, setlist]= useState([])




  return (
  <section>
    <Product/>

    <div className='sec p-5 Wishlist-Mobile'>
      <div className='Cart-container center flex  w-[80%] max-w-[100%] justify-center gap-10'>


        <div className='left w-[100%] '>
          <div className='bg-white rounded-md shadow-md Top'>

           <h2 className=''>Your Wishlist</h2>
           <div className='flex items-center justify-center'>
            <div className='font-bold'>
          <span className='text-gray-700'>Total Items: <span>{totalwish}</span><span> </span></span>

          </div>
          </div>
</div>

<div>

  {wishget.map((product, index) => (
        
<div className='cart-side   shadow-md rounded-md p-1  bg-white'>


<div className='border flex items-center'>

  <div className='cart-item p-3 flex items-center gap-4 '>
  <div className='img w-[20%] rounded-md overflow-hidden group-hover:scale-105'>
    <Link>

    <img src= {img1}  className='image w-full  transition-all'/>
    
    
    </Link>
  </div>
<div className='info w-[90%] '>
  <div className=' text-gray-600'>{product.company}</div>
    <div>{product.title}</div>
    
      <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
    <div>Price:</div>
    <div className='flex gap-3'>
          <div className='new'>{product.price}</div>
    <div className='old'>{product.oldPrice}</div>
        <div className=' text-blue-700'>{product.discount}</div>

     
   

    </div>
     <div className='cart-offer'> <span className='days'>30days</span> return available</div>
     <div className='flex gap-10'>
           <div className=' text-gray-500'>Old Price:<span className='text-black'>{product.oldPrice}</span></div>
                <div className=' text-gray-500'>Price:<span className='text-black'>{product.price}</span></div>

                </div>
          <div className='cart-offer '> 
    
      <div className='Field'>
      <div>
      <span className='days'>30 days</span> return available
     </div>
     <div>
    
     <Button className='btn-blue mt-4 months '>Add to Cart</Button>

     </div>
     </div>

     </div>
     
   
</div>

</div>
<div className='ml-[-10]'>


 <IconButton aria-label="delete" onClick={()=>{onClickDelete(product._id)}}>
        <DeleteIcon />
      </IconButton>


</div>






</div>












</div>

 ))}


 <div className='flex justify-center Cart-Pagination'>



  <Pagination
  onChange={onChnagePage}

  color='primary'
  
  count={page}/>
 </div>
</div>
        





 

</div>
</div>
</div>








<Benefits/>
<Footer/>
  </section>


  )
}

export default Wishlist
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
       
   
</div>

</div>
<div className='ml-[-10]'>


 <IconButton aria-label="delete" onClick={()=>{onClickDelete(product._id)}}>
        <DeleteIcon />
      </IconButton>


</div>






</div>












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
     
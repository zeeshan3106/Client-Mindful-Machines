import React from 'react'
import './Team.css'
import img from '../Images/Blogs/1.jpg'
function Team() {
  return (
    <>
    <div className='flex justify-center w-[100%] Mobile-Top-Bar'>

    <div className='bg-white Team-Top-Line  shadow-md w-[100%] Mobile-White-Card '>
        
        <div className='font-bold text-[20px] Team-Container flex justify-center'>Our Professional Team</div>
    </div>

    </div>
    <div className='flex justify-center Mobile-Flex-Cards '>
    <div className='flex items-center justify-center Team-Container w-[80%] Mobile-Flex-Cards'>
   <div className='bg-white Image-Card shadow-md '>
    <div className='= flex justify-center  '>
     <div className='Team-Image bg-blue-700 flex justify-center shadow-md object-cover'> <img  src={img}/></div>
      
    </div>
     <div className='= flex justify-center font-bold text-[18px]'>Hamza Amjad</div>
         <div className='= flex justify-center'>Stephen is highly qualified Software Engineer with strong foundation on advance tools and technologies.He contributed on signoficant Projects and currently holding title of Enterprise Arhitect in Educational Institution</div>
  
    </div>
    

<div className='bg-white Image-Card shadow-md '>
    <div className='= flex justify-center '>
     <div className='Team-Image bg-blue-700 flex justify-center shadow-md object-cover'> <img  src={img}/></div>
      
    </div>
     <div className='= flex justify-center font-bold text-[18px]'>Zeeshan Ali Zafar</div>
         <div className='= flex justify-center'>Stephen is highly qualified Software Engineer with strong foundation on advance tools and technologies.He contributed on signoficant Projects and currently holding title of Enterprise Arhitect in Educational Institution</div>
  
    </div>



  <div className='bg-white Image-Card shadow-md '>
    <div className='= flex justify-center '>
     <div className='Team-Image bg-blue-700 flex justify-center shadow-md object-cover'> <img  src={img}/></div>
      
    </div>
     <div className='= flex justify-center font-bold text-[18px]'>Shoaib Iqbal</div>
         <div className='= flex justify-center'>Stephen is highly qualified Software Engineer with strong foundation on advance tools and technologies.He contributed on signoficant Projects and currently holding title of Enterprise Arhitect in Educational Institution</div>
  
    </div>

</div>
</div>

    </>
  )
}

export default Team
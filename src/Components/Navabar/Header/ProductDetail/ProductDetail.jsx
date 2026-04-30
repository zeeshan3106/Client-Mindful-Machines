import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ProductDetail.css'
import Benefits from '../Benefits';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineViewHeadline } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { SiGoogletasks } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import { BiSolidDollarCircle } from "react-icons/bi";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { FaBriefcaseMedical } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { GrAlert } from "react-icons/gr";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img from './kyraxys-humanoid-8722273-removebg-preview.png'
import img1 from './turzo_plays-ai-generated-8109260_1920 (1).jpg'
import img2 from './ralph_germany-ai-generated-8359035-removebg-preview.png'
import { MdEmergencyShare } from "react-icons/md";
import { MdOutlineEmergency } from "react-icons/md";
import { FaPersonFalling } from "react-icons/fa6";
import Footer from './Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function ProductDetail() {



  const [productinfo , setproductinfo] = useState({})


  useEffect(()=>{

    axios.get('http://localhost:8000/api/users/product-info')
    .then(res => {console.log('Info', res)

      setproductinfo(res.data.data[0])

    
    }
  )
    .catch(err => console.log(err))
    




  },[])
  console.log('setstatedata',productinfo)
  const navigate = () => {

    const navigate = useNavigate()
    navigate('/Billing')

  }
  return (

   
    <div>


      
        <Navbar/>
      
        <div>

            <div className='h-[600px] overflow-hidden object-cover'>
                   <img className='w-[100%]   '
             src={productinfo.heroImage} />
          
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
                        
                     }} 
                     onClick={navigate}
                     
                     >Add To Cart</Button>

            </div>
            {productinfo && (
            <div className='text-[40px] font-bold text-white absolute top-45 w-[100%] items-center  flex flex-col justify-center'>
                
                <div>{productinfo.title}</div>

                    <div className='underline text-[18px] Underline-text'>Buy Now For {productinfo.price} USD</div>
        </div>
)}

        <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[90%]  '>Modern & AI-Focused.</div></div>
<div className=' DetailPage '>
           <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:'2500',disableOnInteraction:false}}
    
      pagination={{ clickable: true }}
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='p-5 bg-white shadow-md rounded-md'>
<div className='flex justify-center'>
          <img src={productinfo.Slider1} />
</div>
    
    </div>
      </SwiperSlide>
   <SwiperSlide>
        <div className='p-5 bg-white shadow-md rounded-md'>
<div className='flex justify-center'>
          <img src={productinfo.Slider2} />
</div>
    
    </div>
      </SwiperSlide>
   <SwiperSlide>
        <div className='p-5 bg-white shadow-md rounded-md'>
<div className='flex justify-center '>
          <img src={productinfo.Slider3} />
</div>
    
    </div>
      </SwiperSlide>
     <SwiperSlide>
        <div className='p-5 bg-white shadow-md rounded-md'>
<div className='flex justify-center'>
          <img src={productinfo.Slider4} />
</div>
    
    </div>
      </SwiperSlide>
      ...
    </Swiper>


    </div>

            </div>
         
 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[90%]   '>The Functional Approch.</div></div>
<div className='flex justify-end bg-white p-5 pl-0 '>
<div className='flex w-[95%] Cards-Section-Detail'>
           <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3.5}
  
    
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        
  breakpoints={{
        1024:{
          slidesPerView:"3.5"
        }
      }}

    >
      <SwiperSlide>
        <img src={productinfo.function1} />
        <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>{productinfo.functiontextone}</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={productinfo.function2}/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>{productinfo.functiontexttwo}</div>
     
      </SwiperSlide>
      <SwiperSlide>
        <img src={productinfo.function3}/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>{productinfo.functiontextthree}</div>
     
      </SwiperSlide>
       <SwiperSlide>
        <img src={productinfo.function4}/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>{productinfo.functiontextfour}</div>
     
      </SwiperSlide>
       <SwiperSlide>
        <img src={productinfo.function5}/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>{productinfo.functiontextfive}</div>
     
      </SwiperSlide>
    </Swiper>
</div>



</div>

    <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[80%]  '>Why Its Cricial?</div></div>
            <div className='mb-5'>

      
        <div className='flex  pt-5 justify-center items-center'>
            <div className='flex items-center justify-center w-[80%] Mobile-Reason'>
            <div className='w-[50%] flex justify-center font-bold items-center Image-Why-Home overflow-hidden '>
                <img className='w-[80%] Image-Why-Home' src ={productinfo.whyImage1} />
            </div>
        <div className=' w-[50%] Mobile-text-Reason font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>{productinfo.wytexttitleone}</div>
         <div className='text-[18px]'>{productinfo.whytextdescriptionone}</div>
        </div>
</div>
</div>

         <div className='flex  pt-5 justify-center items-center '>
            <div className='flex items-center justify-center w-[80%] Mobile-Reason'>
                 <div className=' w-[50%] Mobile-text-Reason font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>{productinfo.wytexttitletwo}</div>
         <div className='text-[18px]'>{productinfo.whytextdescriptiontwo} </div></div>
            <div className='w-[50%] flex justify-center font-bold items-center Image-Why-Home overflow-hidden '>
                <img className='w-[80%] Image-Why-Home'
                
src ={productinfo.whyImage2} />
            </div>
       
</div>
</div>
      <div className='flex  pt-5 justify-center items-center'>
            <div className='flex items-center justify-center w-[80%] Mobile-Reason'>
            <div className='w-[50%] flex justify-center font-bold items-center Image-Why-Home overflow-hidden '>
                <img className='w-[80%] Image-Why-Home'
 src ={productinfo.whyImage3} />
            </div>
        <div className=' w-[50%] Mobile-text-Reason font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>{productinfo.wytexttitlethree}</div>
         <div className='text-[18px]'>{productinfo.whytextdescriptithree} </div>  </div>
</div>
</div>
      <div className='flex  pt-5 justify-center items-center'>
            <div className='flex items-center justify-center w-[80%] Mobile-Reason'>
                  <div className='w-[50%] Mobile-text-Reason  font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>{productinfo.wytexttitlefour}</div>
         <div className='text-[18px]'>{productinfo.whytextdescriptionfour} </div>  </div>
            <div className='w-[50%] flex justify-center font-bold items-center Image-Why-Home overflow-hidden '>
                <img className='w-[80%] Image-Why-Home' 
src ={productinfo.whyImage4} />
            </div>
    { /* https://images.pexels.com/photos/8294621/pexels-photo-8294621.jpeg} */}
    {/*https://images.pexels.com/photos/6019019/pexels-photo-6019019.jpeg*/}
</div>
</div>

<div>
 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[80%]  '>Detailed Demonstrations.</div></div>
<div className='flex justify-center'>
          <video className='w-[90%]  '   controls 
    autoPlay 
    muted 
    loop>
            <source src='./8084622-uhd_3840_2160_25fps.mp4'></source> </video>
          </div>
</div>



<div>
 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[80%] justify-center  '>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-[18px] text-blue-800 '>Physical AI</div>
              <div className='MobilePysicaltitle'>Beyond Automation.</div>
          <div className='MobilePysicaltitle1'>Driven by Agentic Intelligence!</div>
          <div className='text-[20px] pt-4 text-gray-600  text-center w-[70%] MobilePysicaltitle2'>{productinfo.pysicalaidescition}</div>
          
          </div>
</div></div>
</div>
<div className='flex justify-center items-center'>
<div className='flex justify-center items-center w-[85%] Mobile-Transparent-Robots'>
 <div className='w-[40%] MobileTransparenttext '>
  <div className='font-bold text-[20px] MobileTransparentSubtitle text-center '>{productinfo.physicalaisubtitleone}</div>
  <div className=' MobileTransparentSubtitle Mobile-Subtitle-PAdding MobileTransparenttext2'>{productinfo.pysicalaisubdescitionone}</div>
  </div> 
<div className='flex justify-center'>
  <div className='flex justify-center items-center  '>
  <img src={productinfo.physicalImage1} className='w-[800px] Mobile-Image-Transparent1'/>
  </div>
  </div>


  
</div>



</div>


<div className='flex justify-center items-center'>
<div className='flex justify-center items-center Mobile-Transparent-Robots w-[85%] Gap-Image-Product1'>
  <div className='flex justify-center'>
  <div className='flex justify-center items-center  '>
  <img src={productinfo.physicalImage2} className='w-[600px] Mobile-Image-Transparent1 '/>
  </div>
  </div>
 <div className='w-[40%] Mobile-Transparent-Robots1 '>
  <div className='font-bold text-[20px] .Mobile-Transparent-Robots '>{productinfo.physicalaisubtitletwo}</div>
 <div className='MobileTransparenttext2'>{productinfo.pysicalaisubdescitiontwo}</div> 
</div>


  
</div>



</div>
<div>
 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused  font-bold   '>
          <div className='flex justify-center w-[80%]  '>Saftey.</div></div>
<div className='flex justify-center font-bold text-[50px] flex-col items-center MobilePysicaltitle '>{productinfo.safteytitle}
<div className='text-[20px] w-[50%] text-center text-gray-700 MobileTransparenttext2'>{productinfo.safteydescription}
</div>
</div>
<div className='flex justify-center '>
 {/* https://cdn.pixabay.com/photo/2022/02/15/10/39/point-7014645_1280.jpg */}
  <img className='w-[90%] mt-5' src=
 {productinfo.safteyImage1}
/></div>

<div className='flex justify-center items-center'>
<div className='bg-white p-3 w-[90%] shadow-md rounded-md flex gap-2 flex-wrap  justify-center items-center Mobile-Saftey-Elements'>


  <div className='w-[30%] Mobile-SafteyElement1 '>
   
    <div className=' p-4 pb-2 pt-2 text-[40px] text-blue-800'><MdOutlineEmergency /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>{productinfo.safteycardtitleone} </div>
   <div className='b p-4 pt-0 '>
   {productinfo.safteycarddescriptionone}</div>
   </div>

   
   <div className='w-[30%] Mobile-SafteyElement1'>
    <div></div>
   <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'><FaPersonFalling /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>   {productinfo.safteycardtitletwo} </div>
   <div className='b p-4 pt-0 '>
    
    
   {productinfo.safteycarddescriptiontwo}</div>
   </div>

   


    <div className='w-[30%] Mobile-SafteyElement1'>
   
 <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>   <FaBriefcaseMedical /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>   {productinfo.safteycardtitlethree} </div>
   <div className='b p-4 pt-0 '>
   {productinfo.safteycarddescriptionthree}</div>
   </div>

   <div className='w-[30%] Mobile-SafteyElement1'>
  
  <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>   <GrAlert /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>   {productinfo.safteycardtitlefour} </div>
   <div className='b p-4 pt-0 '>
    {productinfo.safteycarddescriptionfour}    </div>

   </div>



  <div className='w-[30%] Mobile-SafteyElement1'>
    
    <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>  <MdFamilyRestroom /> </div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>   {productinfo.safteycardtitlefive} </div>
   <div className='b p-4 pt-0 '>
     {productinfo.safteycarddescriptionfive} </div>

   </div>

     <div className='w-[30%] Mobile-SafteyElement1'>

    
 <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>    <FaKitchenSet /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>   {productinfo.safteycardtitlesix} </div>
   <div className='b p-4 pt-0 '>
     {productinfo.safteycarddescriptionsix}</div>
   </div>




          </div>




</div>
          <div></div>



</div>



<div>
 <div className='flex justify-center items-center text-[35px] mt-4 ModernAIFocused font-bold   '>

          <div className='flex justify-center items-center  w-[80%]  Mobile-Detailed-Feature-Title'>Detailed Features(Image with Slider).</div></div>
    <div>

      <div className='bg-black pb-5 text-white font-bold text-[35px] '>
   <div >

      <img className='w-[100%] pb-5' src={productinfo.digitalCardImage1}/>



    </div>


    <div>


               <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y ]}
      spaceBetween={50}
      slidesPerView={1}
     
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        1024:{
          slidesPerView:"3.5"
        }
      }}
    >
      <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
<img src={productinfo.digitalCardImage2} />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>{productinfo.digitalcardssubtitleone}
  <div className='text-[15px] font-bold-0'> {productinfo.digitalcardssubdescriptionone}</div>
    </div>
</div>

    </div>



  
      </SwiperSlide>
   
      </div>
      <div>
      <SwiperSlide>

        <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
          <img src={productinfo.digitalCardImage2} />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>{productinfo.digitalcardssubtitletwo}
  <div className='text-[15px] font-bold-0'> {productinfo.digitalcardssubdescriptiontwo}</div>
    </div>
</div>

    </div>



  
      </SwiperSlide>
   


   
      </div>



  
      </SwiperSlide>
   
      </div>
       <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
          <img src={productinfo.digitalCardImage3} />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>{productinfo.digitalcardssubtitlethree}
  <div className='text-[15px] font-bold-0'> {productinfo.digitalcardssubdescriptionthree}</div>
    </div>
</div>

    </div>



  
      </SwiperSlide>
   
      </div>


         <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
          <img src={productinfo.digitalCardImage4} />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>{productinfo.digitalcardssubtitlefour}
  <div className='text-[15px] font-bold-0'> {productinfo.digitalcardssubdescriptionfour}</div>
    </div>
</div>

    </div>



  
      </SwiperSlide>
   
      </div>
        <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
          <img src={productinfo.digitalCardImage5} />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>{productinfo.digitalcardssubtitlefive}
  <div className='text-[15px] font-bold-0'>{productinfo.digitalcardssubdescriptionfive}</div>
    </div>
</div>

    </div>



  
      </SwiperSlide>
   
      </div>
 
    </Swiper>
    </div>
    
    
      </div>



    </div>



</div>



<div>
 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[80%]  '>Choose Your Best.</div></div>


          <div className='flex justify-center w-[100%]  '>

             <div className='bg-white w-[40%] Mobile-BestChoose p-5 shadow-md rounded-md Compare-Detail'>
              <div className='flex flex-col justify-center gap-2 items-center '>
              <div className='font-bold text-[25px] Mobile-Best-Title'>{productinfo.title}</div>
              <div className='Mobile-Best-element2'>The ultimate way to watch your health.</div>
              <div className='Mobile-Best-element3'>From {productinfo.price}</div>
              </div>

              <div className='mt-5 flex justify-center'>
             Currently Viewing
                </div>
                <div className='mt-2 flex border-b pb-5  border-b-gray-300 text-blue-600 font-bold justify-center'>
                
                Buy</div>



<div>
 
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
               <div className='text-[30px]'><GiMaterialsScience /></div>
               Material Finish</div>
             <div className='flex justify-center  Mobile-Best-Elements text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.MaterialFinish}</div>
                
</div>


                <div>
                 

             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              <div className="text-[30px]"><MdOutlineViewHeadline /></div> 
               Headline</div>
             <div className='flex justify-center Mobile-Best-Elements  text-[15px] Mobile-Best-Elements text-gray-800'>
          {productinfo.Headline}</div>
                </div>
                 <div>

             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              
                <div className="text-[30px]"><BiSolidDollarCircle /></div> 
              Pricing</div>
             <div className='flex justify-center Mobile-Best-Elements  text-[15px] Mobile-Best-Elements text-gray-800'>
              Starting at {productinfo.Pricing}</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
               <div className="text-[30px]"><GiProcessor /></div> 
              
              Processing</div>
             <div className='flex justify-center Mobile-Best-Elements text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.Processing}</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              <div className="text-[30px]"><IoEyeSharp /></div> 
              
              Vision System</div>
             <div className='flex justify-center Mobile-Best-Elements text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.VisionSystem}</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
             
 <div className="text-[30px]"> <SiGoogletasks /></div> 
Dexterity</div>
             <div className='flex justify-center Mobile-Best-Elements  text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.Dexterity}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Interaction</div>
             <div className='flex justify-center Mobile-Best-Elements  text-[15px] Mobile-Best-Elements text-gray-800'>
           {productinfo.Interaction}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Sensors</div>
             <div className='flex justify-center Mobile-Best-Elements  text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.Sensors}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Battery Life</div>
             <div className='flex justify-center Mobile-Best-Elements  text-[15px] Mobile-Best-Elements text-gray-800'>
              {productinfo.BatteryLife}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Charging</div>
             <div className='flex justify-center Mobile-Best-Elements  text-[15px] Mobile-Best-Elements text-gray-800'>
              {productinfo.Charging}</div>
                </div>



           

              
            </div>

 <div className='bg-white w-[40%] p-5 shadow-md rounded-md Compare-Detail Mobile-BestChoose'>
              <div className='flex flex-col justify-center gap-2 items-center '>
              <div className='font-bold text-[25px] Mobile-Best-Title'>{productinfo.title}</div>
              <div className='Mobile-Best-element2'>{productinfo.Headline}</div>
              <div className='Mobile-Best-element3'>From {productinfo.price}</div>
              </div>

                 <div className='mt-5 flex justify-center'>
              <Button variant='contained' sx={{ borderRadius:'30ch'}}>Learn more </Button>  
                </div>
                <div className='mt-2 flex border-b pb-5  border-b-gray-300 text-blue-600 font-bold justify-center'>
                
                Buy</div>



<div>
 
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
               <div className='text-[30px]'><GiMaterialsScience /></div>
               Material Finish</div>
             <div className='flex justify-center  text-[15px] text-gray-800 Mobile-Best-Elements'>
              {productinfo.MaterialFinish}</div>
                
</div>


                <div>
                 

             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              <div className="text-[30px]"><MdOutlineViewHeadline /></div> 
               Headline</div>
             <div className='flex justify-center  Mobile-Best-Elements text-[15px] text-gray-800'>
           {productinfo.Headline}</div>
                </div>
                 <div>

             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              
                <div className="text-[30px]"><BiSolidDollarCircle /></div> 
              Pricing</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
               Starting at {productinfo.Pricing}</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
               <div className="text-[30px]"><GiProcessor /></div> 
              
              Processing</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
           {productinfo.Processing}</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              <div className="text-[30px]"><IoEyeSharp /></div> 
              
              Vision System</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
              {productinfo.VisionSystem}</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
             
 <div className="text-[30px]"> <SiGoogletasks /></div> 
Dexterity</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
            {productinfo.Dexterity}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Interaction</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.Interaction}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Sensors</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.Sensors}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Battery Life</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
              {productinfo.BatteryLife}</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Charging</div>
             <div className='flex justify-center  text-[15px] Mobile-Best-Elements text-gray-800'>
             {productinfo.Charging}</div>
                </div>



           

              
            </div>
          
          </div>

         


</div>



 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[80%]  '>Environmental Constraints.</div></div>


          <div className='flex justify-center '>

         <div className=' flex justify-center w-[90%] gap-3 Mobile-Environment '>
          <div className='w-[30%] bg-white p-4 rounded-md shadow-md Enviro-Detail Card-Enviro'>
            <div className='text-[25px] font-bold'>Ships in <span className='text-blue-800'>Compact Packaging</span> for <span className='text-blue-800'>40%</span> more units per trip</div>

</div>

    <div className='w-[30%] bg-white p-4 rounded-md shadow-md Enviro-Detail Card-Enviro'>
            <div className='text-[25px] font-bold'>Made with  <span className='text-orange-700'>40% Recycle material</span> by weight</div>

</div>


    <div className='w-[30%] bg-white p-4 rounded-md shadow-md Enviro-Detail Card-Enviro'>
            <div className='text-[25px] font-bold'>Developed with  <span className='text-purple-600'>100% Renewable</span> Energy</div>

</div>

</div>

          </div>






    </div>
<Benefits/>


<Footer/>
        
    </div>
   
  )
}

export default ProductDetail
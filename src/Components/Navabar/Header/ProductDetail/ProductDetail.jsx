import React from 'react'
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
          <img src='https://www.apple.com/v/apple-watch-series-11/c/images/overview/highlights/highlights_glass_endframe__f39nueq3bfiy_large.jpg' />
</div>
    
    </div>
      </SwiperSlide>
   <SwiperSlide>
        <div className='p-5 bg-white shadow-md rounded-md'>
<div className='flex justify-center'>
          <img src='https://www.apple.com/v/apple-watch-series-11/c/images/overview/highlights/highlights_glass_endframe__f39nueq3bfiy_large.jpg' />
</div>
    
    </div>
      </SwiperSlide>
   <SwiperSlide>
        <div className='p-5 bg-white shadow-md rounded-md'>
<div className='flex justify-center '>
          <img src='https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
</div>
    
    </div>
      </SwiperSlide>
     <SwiperSlide>
        <div className='p-5 bg-white shadow-md rounded-md'>
<div className='flex justify-center'>
          <img src='https://images.pexels.com/photos/6019019/pexels-photo-6019019.jpeg' />
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
      slidesPerView={3}
    
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg' />
        <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>Adaptive Learning</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/7688545/pexels-photo-7688545.jpeg'/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>Intelligence</div>
     
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://images.pexels.com/photos/35280155/pexels-photo-35280155.jpeg'/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>Protection</div>
     
      </SwiperSlide>
       <SwiperSlide>
        <img src='https://images.pexels.com/photos/8438879/pexels-photo-8438879.jpeg'/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>Precision</div>
     
      </SwiperSlide>
       <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2025/04/28/19/29/ai-generated-9565579_1280.png'/>
           <div className='absolute text-[28px] font-bold text-white bottom-20 left-8'>Organization</div>
     
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
                <img className='w-[80%] Image-Why-Home' src ="https://media.istockphoto.com/id/1495819409/photo/digital-mind-brain-artificial-intelligence-concept.jpg?s=1024x1024&w=is&k=20&c=AOs5JEz8sdE2wwrZmRSSd0dL8qj00ebD8tNY_AWb1yk=" />
            </div>
        <div className=' w-[50%] Mobile-text-Reason font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>Intelligence That Learns!</div>
         <div className='text-[18px]'>"Our machines don't just follow instructions, they understand context. Powered by advanced neural networks, our AI adapts in real-time to provide personalized health insights and precision industrial movements."</div>
        </div>
</div>
</div>

         <div className='flex  pt-5 justify-center items-center '>
            <div className='flex items-center justify-center w-[80%] Mobile-Reason'>
                 <div className=' w-[50%] Mobile-text-Reason font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>Seamless Integration.</div>
         <div className='text-[18px]'>"Technology that feels like second nature. From wearable health trackers to wellness companions, our devices are designed to enhance your physical well-being while remaining invisible in your daily routine."</div>
        </div>
            <div className='w-[50%] flex justify-center font-bold items-center Image-Why-Home overflow-hidden '>
                <img className='w-[80%] Image-Why-Home'
                
src ="https://media.istockphoto.com/id/1159288175/photo/young-woman-checking-the-sports-watch-with-screen-healthcare-icon-measuring-heart-rate-and.jpg?s=1024x1024&w=is&k=20&c=HTB39-o0MmWL0z3pPiD2SGr5WOSz7dzuCWdC0rL7HVQ=" />
            </div>
       
</div>
</div>
      <div className='flex  pt-5 justify-center items-center'>
            <div className='flex items-center justify-center w-[80%] Mobile-Reason'>
            <div className='w-[50%] flex justify-center font-bold items-center Image-Why-Home overflow-hidden '>
                <img className='w-[80%] Image-Why-Home'
 src ="https://images.pexels.com/photos/11951215/pexels-photo-11951215.jpeg" />
            </div>
        <div className=' w-[50%] Mobile-text-Reason font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>Precision at Scale!</div>
         <div className='text-[18px]'>"Engineered for the demands of tomorrow. Our industrial robots and autonomous drones offer unmatched precision and durability, reducing downtime and optimizing workflows in the most challenging environments"</div>
        </div>
</div>
</div>
      <div className='flex  pt-5 justify-center items-center'>
            <div className='flex items-center justify-center w-[80%] Mobile-Reason'>
                  <div className='w-[50%] Mobile-text-Reason  font-bold p-4 text-[25px] flex flex-col gap-3 justify-center '>

         <div>The Ethical Future.</div>
         <div className='text-[18px]'>"We build machines with a conscience. Our mission is to bridge the gap between human potential and mechanical efficiency, ensuring a future where AI serves to protect, assist, and empower humanity."</div>
        </div>
            <div className='w-[50%] flex justify-center font-bold items-center Image-Why-Home overflow-hidden '>
                <img className='w-[80%] Image-Why-Home' 
src ="https://images.pexels.com/photos/18799047/pexels-photo-18799047.jpeg" />
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
              <div>Beyond Automation.</div>
          <div>Driven by Agentic Intelligence!</div>
          <div className='text-[20px] pt-4 text-gray-600  text-center w-[70%]'>The Sentient-Core isn't just programmed; it’s trained. Powered by a neural architecture that mimics human decision-making, our humanoid perceives, reasons, and adapts to complex environments in real-time. From the fine motor skills required for medical precision to the spatial awareness needed for industrial logistics, it’s not just a machine—it’s a partner.</div>
          
          </div>
</div></div>
</div>
<div className='flex justify-center items-center'>
<div className='flex justify-center items-center w-[85%]'>
 <div className='w-[40%]'>
  <div className='font-bold text-[20px]'>Streamlined Intelligence..</div>
  Our improved control architecture highlights four core operational modes, making it faster than ever to deploy your robot. Whether you need to initiate Spatial Mapping, Collaborative Sync, Dynamic Pathing, or Diagnostic Analysis, the power of the Core is at your fingertips.
  </div> 
<div className='flex justify-center'>
  <div className='flex justify-center items-center  '>
  <img src={img} className='w-[800px]'/>
  </div>
  </div>


  
</div>



</div>


<div className='flex justify-center items-center'>
<div className='flex justify-center items-center w-[85%] Gap-Image-Product1'>
  <div className='flex justify-center'>
  <div className='flex justify-center items-center  '>
  <img src={img2} className='w-[600px]'/>
  </div>
  </div>
 <div className='w-[40%]'>
  <div className='font-bold text-[20px]'>A Refreshed Neural Interface..</div>
 The upgraded Sentient-OS layout features an intuitive four-zone dashboard, providing instant access to mission-critical protocols. Seamlessly toggle between Autonomous Navigation, Precision Manipulation, Real-time Telemetry, and Safety Override with a single touch. </div> 



  
</div>



</div>
<div>
 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused  font-bold   '>
          <div className='flex justify-center w-[80%]  '>Saftey.</div></div>
<div className='flex justify-center font-bold text-[50px] flex-col items-center'>A real lifeline.
<div className='text-[20px] w-[50%] text-center text-gray-700'>Packed with innovative safety firsts, Apple Watch Series 11 has your back. It’s designed to summon help when you need it most — even if you can’t reach your iPhone.
</div>
</div>
<div className='flex justify-center '>
 {/* https://cdn.pixabay.com/photo/2022/02/15/10/39/point-7014645_1280.jpg */}
  <img className='w-[90%] mt-5' src=
  "https://media.istockphoto.com/id/1350320510/photo/cyber-law-or-internet-law-concept-with-ai-robot.jpg?s=1024x1024&w=is&k=20&c=Qk8QNSTeQbNGrQ_gqZhmzeZBKZpmyplQh4rHOMfIA6o="
/></div>

<div className='flex justify-center items-center'>
<div className='bg-white p-3 w-[90%] shadow-md rounded-md flex gap-2 flex-wrap  justify-center items-center'>


  <div className='w-[30%]'>
   
    <div className=' p-4 pb-2 pt-2 text-[40px] text-blue-800'><MdOutlineEmergency /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>Emergency SOS. ASAP. </div>
   <div className='b p-4 pt-0 '>
    Need urgent help? Just speak to Friendly or tap its chest screen to call emergency services, share your location, and provide a live video feed. </div>

   </div>

   
   <div className='w-[30%]'>
    <div></div>
   <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'><FaPersonFalling /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>Fall Detection at the ready. </div>
   <div className='b p-4 pt-0 '>
    
    
Friendly uses vision and LiDAR to detect falls, then approaches to check status, calls for help, and shares live video.21 In critical moments, it stays by their side until help arrives.  </div>

   </div>

   


    <div className='w-[30%]'>
   
 <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>   <FaBriefcaseMedical /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>Medical Aid & First Response. </div>
   <div className='b p-4 pt-0 '>
Friendly displays Medical IDs on its chest screen. In emergencies, it guides CPR and retrieves life-saving medications or EpiPens from cabinets, providing immediate, critical family support  </div>

   </div>

   <div className='w-[30%]'>
  
  <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>   <GrAlert /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>Intruder & Environmental Alerts. </div>
   <div className='b p-4 pt-0 '>
  Friendly patrols indoors to detect smoke, gas leaks, or intruders, automatically triggering an Emergency SOS to your phone if it finds anomalies
     </div>

   </div>



  <div className='w-[30%]'>
    
    <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>  <MdFamilyRestroom /> </div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>School Pick-up & Walking. </div>
   <div className='b p-4 pt-0 '>
   Friendly handles school pickups with real-time GPS "Check-ins," while walking alongside family members to ensure they navigate traffic and safe paths securely
    </div>

   </div>

     <div className='w-[30%]'>

    
 <div className=' p-4 pb-2 pt-2 text-[30px] Logo-Saftey text-blue-800'>    <FaKitchenSet /></div>
  <div className='  p-4  pt-0 pb-0 font-bold text-[18px] '>Effortless Assistance. </div>
   <div className='b p-4 pt-0 '>
   Friendly evolves from fetching ingredients to following complex recipes, while its grippers seamlessly transport water, medicine, or bags between rooms for you. </div>

   </div>




          </div>




</div>
          <div></div>



</div>



<div>
 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>

          <div className='flex justify-center w-[80%]  '>Detailed Features(Image with Slider).</div></div>
    <div>

      <div className='bg-black pb-5 text-white font-bold text-[35px] '>
   <div >

      <img className='w-[100%] pb-5' src='https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?s=1024x1024&w=is&k=20&c=Ob0ACggwWuFDFRgIc-SM5bLWjNbIyoREeulmLN8dhLs=' />



    </div>


    <div>


               <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y ]}
      spaceBetween={50}
      slidesPerView={3.5}
     
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
<img src='https://cdn.pixabay.com/photo/2024/04/26/17/15/humanoid-8722281_1280.png' />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>All in on 5G
  <div className='text-[15px] font-bold-0'> With 5G, you can download apps, music, and podcasts faster than ever.5 And thanks to a 5G modem and updated antenna architecture, Series 11 provides better coverage in areas with weak reception. Dropped calls? Not on our watch.</div>
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
          <img src='https://cdn.pixabay.com/photo/2024/03/11/12/01/ai-generated-8626467_1280.jpg' />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>All in on 5G
  <div className='text-[15px] font-bold-0'> With 5G, you can download apps, music, and podcasts faster than ever.5 And thanks to a 5G modem and updated antenna architecture, Series 11 provides better coverage in areas with weak reception. Dropped calls? Not on our watch.</div>
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
          <img src='https://cdn.pixabay.com/photo/2024/06/21/07/32/ai-generated-8843794_1280.jpg' />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>All in on 5G
  <div className='text-[15px] font-bold-0'> With 5G, you can download apps, music, and podcasts faster than ever.5 And thanks to a 5G modem and updated antenna architecture, Series 11 provides better coverage in areas with weak reception. Dropped calls? Not on our watch.</div>
    </div>
</div>

    </div>



  
      </SwiperSlide>
   
      </div>


         <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
          <img src='https://cdn.pixabay.com/photo/2022/06/16/12/19/ai-7265839_1280.jpg' />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>All in on 5G
  <div className='text-[15px] font-bold-0'> With 5G, you can download apps, music, and podcasts faster than ever.5 And thanks to a 5G modem and updated antenna architecture, Series 11 provides better coverage in areas with weak reception. Dropped calls? Not on our watch.</div>
    </div>
</div>

    </div>



  
      </SwiperSlide>
   
      </div>
        <div>
      <SwiperSlide>

        <div className=''>
<div className=''>
          <img src='https://cdn.pixabay.com/photo/2024/06/12/06/06/robot-8824475_1280.jpg' />
</div>

<div className='flex'>
<div className='text-[18px] mt-4'>All in on 5G
  <div className='text-[15px] font-bold-0'> With 5G, you can download apps, music, and podcasts faster than ever.5 And thanks to a 5G modem and updated antenna architecture, Series 11 provides better coverage in areas with weak reception. Dropped calls? Not on our watch.</div>
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


          <div className='flex justify-center w-[100%]'>

             <div className='bg-white w-[40%] p-5 shadow-md rounded-md Compare-Detail'>
              <div className='flex flex-col justify-center gap-2 items-center '>
              <div className='font-bold text-[25px]'>HCI Humanoid Robot</div>
              <div>The ultimate way to watch your health.</div>
              <div>From $399 or $33.25/mo. for 12 mo.*</div>
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
             <div className='flex justify-center  text-[15px] text-gray-800'>
              Brushed Carbon, Onyx Titanium</div>
                
</div>


                <div>
                 

             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              <div className="text-[30px]"><MdOutlineViewHeadline /></div> 
               Headline</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
            The ultimate evolution of embodied AI.</div>
                </div>
                 <div>

             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              
                <div className="text-[30px]"><BiSolidDollarCircle /></div> 
              Pricing</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>4
              Starting at $45,000</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
               <div className="text-[30px]"><GiProcessor /></div> 
              
              Processing</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
             S10-Pro Quantum Chip</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
              <div className="text-[30px]"><IoEyeSharp /></div> 
              
              Vision System</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              360° LiDAR + 4K Stereoscopic Vision</div>
                </div>

 <div>
             <div className='flex flex-col items-center justify-center mt-5 font-bold'>
             
 <div className="text-[30px]"> <SiGoogletasks /></div> 
Dexterity</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
             28-Axis Precision Hands (0.01mm tolerance)</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Interaction</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
             Full Haptic Feedback & Voice Synthesis</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Sensors</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              Biometric Health Monitoring & Stress Analysis</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Battery Life</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              24 Hours Active / 48 Hours Standby</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Charging</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              Rapid Wireless Induction Docking</div>
                </div>



           

              
            </div>


           <div className='bg-white w-[40%] p-5 shadow-md rounded-md Compare-Detail'>
              <div className='flex flex-col justify-center gap-2 items-center '>
              <div className='font-bold text-[25px]'>HCI Humanoid Robot</div>
              <div>The ultimate way to watch your health.</div>
              <div>From $399 or $33.25/mo. for 12 mo.*</div>
              </div>

              <div className='mt-5 flex justify-center'>
              <Button variant='contained' sx={{ borderRadius:'30ch'}}>Learn more </Button>  
                </div>
                <div className='mt-2 flex border-b pb-5  border-b-gray-300 text-blue-600 font-bold justify-center'>
                
                Buy</div>

<div>
             <div className='flex justify-center mt-5 font-bold'>Material Finish</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              Reinforced Polycarbonate or Matte Aluminum</div>
                
</div>


                <div>
             <div className='flex justify-center mt-5 font-bold'>Headline</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
            Intelligent automation for every workspace.</div>
                </div>
                 <div>
             <div className='flex justify-center mt-5 font-bold'>Pricing</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>4
              Starting at $18,500</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Processing</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
             S10 standard AI Chip</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Vision System</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              180° Ultra-Wide HD Vision</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Dexterity</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
             12-Axis Industrial Grippers</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Interaction</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
            Standard Visual Indicators & Voice</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Sensors</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              Proximity & Obstacle Detection</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Battery Life</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
             12 Hours Active / 24 Hours Standby</div>
                </div>

 <div>
             <div className='flex justify-center mt-5 font-bold'>Charging</div>
             <div className='flex justify-center  text-[15px] text-gray-800'>
              Standard Direct-Link Charging</div>
                </div>



           

              
            </div>
          </div>

         


</div>



 <div className='flex justify-center text-[35px] mt-4 ModernAIFocused font-bold   '>
          <div className='flex justify-center w-[80%]  '>Environmental Constraints.</div></div>


          <div className='flex justify-center'>

         <div className=' flex justify-center w-[90%] gap-3 '>
          <div className='w-[30%] bg-white p-4 rounded-md shadow-md Enviro-Detail Card-Enviro'>
            <div className='text-[25px] font-bold'>Ships in <span>Compact Packaging</span>for 40% more units per trip</div>

</div>

    <div className='w-[30%] bg-white p-4 rounded-md shadow-md Enviro-Detail Card-Enviro'>
            <div className='text-[25px] font-bold'>Made with 40% <span>Recycle material</span> by weight</div>

</div>


    <div className='w-[30%] bg-white p-4 rounded-md shadow-md Enviro-Detail Card-Enviro'>
            <div className='text-[25px] font-bold'>Developed with 100% <span>100% Renewablel</span> Energy</div>

</div>

</div>

          </div>






    </div>
<Benefits/>
        
    </div>
  )
}

export default ProductDetail
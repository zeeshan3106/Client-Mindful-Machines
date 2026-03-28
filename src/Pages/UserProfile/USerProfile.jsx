import React, { useState, useEffect } from 'react'
import './USerProfile.css'
import img1 from './Images/1.jpeg'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import { Button } from '@mui/material'
import { FaUserCheck } from "react-icons/fa";
import { NavLink } from "react-router"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'



function USerProfile() {


  const [profile, setprofile] = useState({
    Name:"",

    Email:"",
     Mobile:"",
     Whatsapp:"",
      Country:"",
      City:"",
        PostalCode:"",
         State:""


  })

  const [newdata, setdata]=useState([])


  const onChangeInputProile =(e)=>{

    const {name, value}=e.target;
    setprofile( prev => ({

      ...prev, 
      [name]:value
    
    
    })
  )

  } 

 
console.log()

 /* useEffect((e) => {

    const token =  localStorage.getItem("token")
    
    axios.get('https://backend-mindful-machines-44vc.vercel.app/api/frontend/getprofiles',
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )
   
    .then(res => {
      console.log(res.data.data)


      setdata(res.data.data)

  
    
    })
    
      .catch(err => err)

    
    
  
   
  }, [])
  */



     console.log(profile)

const [state,setstate]=useState({
  Image:""
 })
 const onImageChnage = (e)=>{

  const file = e.target.files[0]
  const pic = new FormData()
  pic.append("key",file)
 const a = pic.get("key")
 console.log(a)
 setstate(a)

 console.log(state)
   axios.post("https://backend-mindful-machines-44vc.vercel.app/api/Image/imagetoback",pic)
    .then(res => console.log(res)).catch(err => console.log(err))



 }


  const onSubmit=(e)=>{
    e.preventDefault();

  const file = picture.files[0]

  console.log(file)
  const Name = profile.Name
    const  Email=profile.Email
    const  Mobile=profile.Mobile
    const  Whatsapp=profile.Whatsapp
     const  Country=profile.Country
     const  City=profile.City
      const   PostalCode=profile.PostalCode
      const    State=profile.State
  
 
  const Age = "23"
 
    const picData = new FormData()
    picData.append("key",file)
    picData.append("Name",Name)
     picData.append("Email",Email)
      picData.append("Mobile",Mobile)
 picData.append("Country",Country)
 picData.append("Whatsapp",Whatsapp)
 picData.append("City",City)
 picData.append("PostalCode",PostalCode)
 picData.append("State",State)



 console.log(picData)
  
  const token = localStorage.getItem("token")


    axios.post('https://backend-mindful-machines-44vc.vercel.app/api/frontend/profile',picData ,{
      headers:{
          Authorization:`Bearer ${token}`
        }}
    )
 
    .then( res =>{ 
console.log(profile)
     console.log(picData)
  
      {

        
      }
        toast.success("Profile Updated Successfu;;y!")
   



      })
    .catch( err => console.log(err))

    







  }


 

 const onClickImage = ()=>{

  
 }








  return (
    <section>
      <Product/>
      <div className='p-10 w-full'>
        <div className=' Profile flex gap-1  '>
          <div className='col1 w-[10%]'>
          <div className=' bg-white shadow-md rounded-md  w-[70%]'>
            <div className='w-[90%] flex items-center justify-center flex-col'>


             <div></div>
                   <diV className="New-Image shadow-md rounded-md ">

<img className=' cursor-pointer Porfile-Image  shadow-md rounded-md' 
src ={newdata.length > 0 ? newdata[0].Image : ''} / >








</diV>
                    
        
           
<div className='font-bold border-gray-500 pt-2 pb-5 ml-5 flex justify-center items-center'>

    <div> <input type = "file" id= "picture" className='' onChange={(e)=>{onImageChnage(e);}}></input> </div> 
       







</div>
                <div className=' Name-section pt-5 Name pl-10 pb-0 justify-center'>{newdata.length > 0 ? newdata[0].Name : "1"}</div>
                <h6 className='text-gray-400 font-bold pb-4'>{newdata.length>0?newdata[0].Email:""}</h6>

                <div className='Menubar MyaccountTabs'>


<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div className='Logo'><FaUserCheck /></div>
                  <div>   User Profile</div>
                  </div>
                </Button>
</NavLink>

<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                
                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div>  My Cart</div>
                  </div>
                </Button>
</NavLink>

<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div> My List  </div>
                  </div>
                </Button>

</NavLink>
<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
></NavLink>
<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>
                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div>  Log-out</div>
                  </div>
                </Button>


</NavLink>

            </div>



                
              </div>
            </div>
          </div>
       
       
       <div className='right-col w-[60%] items-center !justify-center'>

        <div className='bg-white w-full rounded-md shadow-md p-5 '>

          <h3 className='my-profile pb-3'>My Profile</h3>

          <div className=' Box1w-[100%] flex gap-3 ' >
            <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" 


name="Name"
value={profile.Name}
onChange={onChangeInputProile}
      
      
      
      />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Email" variant="outlined"
      
      
name="Email"
value={profile.Email}
onChange={onChangeInputProile}
      />
      
    </Box></div>




          </div>
          <div className='flex gap-3'>
                <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Mobile" variant="outlined" 
      
      
name="Mobile"
value={profile.Mobile}
onChange={onChangeInputProile}
      />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="WhatsApp" variant="outlined" 
      
name="Whatsapp"
value={profile.Whatsapp}
onChange={onChangeInputProile}
      />
      
    </Box></div>

</div>

     <div className='flex gap-3 w-full'>
                <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Country" variant="outlined" 
      
name="Country"
value={profile.Country}
onChange={onChangeInputProile}
      />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="State" variant="outlined" 
      
name="State"
value={profile.State}
onChange={onChangeInputProile}
      />
      
    </Box></div>

</div>
     <div className='flex gap-3'>
                <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="City" variant="outlined"
      
name="City"
value={profile.City}
onChange={onChangeInputProile}
       />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Postal Code" variant="outlined"
      
name="PostalCode"
value={profile.PostalCode}
onChange={onChangeInputProile}
       />
      
    </Box></div>




</div>
<div className='flex center gap-2  Buttons'>
<Button className='btn-blue  btn-lg w-[100%]



'  onClick={onSubmit}      >
     <Toaster 
    toastOptions={{

      style:{
        background:"white",
        color:"black",
        borderRadius:"20px",
        fontSize:"14px",
        fontFamily:"Roboto",

      }


    }}
    
    
    
    />
  
  
  
  Save</Button>
<Button className='btn-blue  btn-border btn-lg w-[100%]'>Cancel</Button>
</div>
        </div>
<div className='bg-white w-[50px] mt-5'>
       
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
</div>
       </div>
       
       
        </div>
      </div>

    



<Benefits/>

    </section>
  )
}

export default USerProfile
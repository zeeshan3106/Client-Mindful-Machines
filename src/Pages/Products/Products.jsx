import React, { useState } from 'react'
import './Products.css'
import Product from '../../Components/Navabar/Header/Header1'
import Sidebar from './Sidebar'
import Benefits from '../../Components/Navabar/Header/Benefits'
import Productbar from './Productbar'
import ProductItem from '../../Components/Navabar/Header/ProductItem'
import {Link} from 'react-router-dom'

import './apple.css'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoGridSharp } from "react-icons/io5";
import { GoRows } from "react-icons/go";
import axios from 'axios'
import { useEffect } from 'react'
import ProductItemSearch from '../../Components/Navabar/Header/ProductItemSearch'
import Pagination from '@mui/material/Pagination';






import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { createContext } from 'react'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { TbFilterCheck } from "react-icons/tb";

import img1 from './Components/1.jpg'


export const appleContext = createContext()

export const appleProvider = ({childern})=>{
    const [selectedd, setSelected] = useState(() =>{
   return localStorage.getItem('item')
   });
}





/* import img1 from './Images/Latest Products/1.jpg'1*/


import { MdOutlineZoomInMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";





import toast, { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer'
function Products() {




  const localitem = localStorage.getItem("item")

  const [apple , setapple]=useState("")


  useEffect(()=>{
    const tokenn = localStorage.getItem("token")
    setapple(tokenn)
    console.log("token",tokenn)
  },[])


 
   const [selectedd, setSelected] = useState(() =>{
   return localStorage.getItem('item')
   });
  
    const [pro , setpro] = useState([ ])
    
    const [count , setcount] = useState([0])
  
    
      const AddtoWishlist = (_id) =>{
  const token = localStorage.getItem("token")
  
        axios.post(`${import.meta.env.VITE_API_URL}/api/wish/addWish`,
           {
            "_id":_id
          }
  ,
  
  {
  
  
          headers:{
  
            Authorization:`Bearer ${token}`
  
          },
  
     
  
        }).then(
  
          res => {
            console.log(res.data)
            toast.success("Successfully Wished...")
          }
  
        ).catch(err => {
            toast.error("Already Existed...")
        })
  
  
  
  
      }
  
  
  
  
  
  
      const onClick = (_id) =>{
  const token = localStorage.getItem("token")
  
        axios.get(`${import.meta.env.VITE_API_URL}/api/cart/cartget`,{
  
          headers:{
  
            Authorization:`Bearer ${token}`
  
          },
  
          params:{
            "_id":_id
          }
  
        }).then(
  
          res => {
            console.log(res.data)
            toast.success("Successfully Submitted...")
          }
  
        ).catch(err => {
            toast.error("Already Existed...")
        })
  
  
  
  
      }
  
  
  
  
  
  
  
  
  
  console.log("API URL Check:", import.meta.env.VITE_API_URL);
  
  
  
        useEffect(() => {
          
          const token = localStorage.getItem("token")
          const fileritem = localStorage.getItem("item")
          axios.get(`${import.meta.env.VITE_API_URL}/api/products/getbycategory`,
  
        {    /*  
              headers:{
                Authorization:`Bearer ${token}`
              }   */
  
              params:{
                categoryid: selectedd
              }
            }
  
  
  
            
  
  
  
          )
          .then( res => {
             setpro(res.data.data)  
              setpages(res.data.totalPages)
          }
                  
          )
          .catch(err => err)   
    
       }, [])
  
  





















  
    const [selected ,setselected]=useState([])
  
  
  
    const [filter,isfllter]=useState({
  
      category:[],
   availability:[],
   minprice:"" ,
   maxprice:"" ,
    ratings:"", 
    page:1, 
    limit:5,
    price:""
  
  })
  
  const [categoryitems , setcategoryitems]=useState([])
  
  
  useEffect( (e)=>{
  
    axios.get(`${import.meta.env.VITE_API_URL}/api/products/getCategory`)
    .then(res => 
  
      setcategoryitems(res.data.data)
  
  
    ).catch(err => err)
  
  
  },[])
  
  
  
  useEffect(()=>{
    if (selected.length === 0) return; // optional: prevent empty request

   
    axios.get(`${import.meta.env.VITE_API_URL}/api/products/getbycategory`, {
      params: {
        categoryid: selected

      }
    })
    .then(res => {console.log(res.data)
       setpages(res.data.totalPages)
    })
    .catch(err => err)
  
  
  
  
  },[]
  
  
  )
  
  
  
  const[price,setprice]=useState([0,100000])
  
    const [state,setstate]=useState([])
       const [value, setValue] = React.useState([20, 37]);
  
    const handleChange = (e) => {
      const v = e.target.name

       setselected(v)
       sethispage(1)
        localStorage.setItem("item",v)


          const token = localStorage.getItem("token")
          const fileritem = localStorage.getItem("item")
          axios.get(`${import.meta.env.VITE_API_URL}/api/products/getbycategory`,
  
        {    /*  
              headers:{
                Authorization:`Bearer ${token}`
              }   */
  
              params:{
                categoryid:v,
                page:1
           
              }
            }
  
  
  
            
  
  
  
          )
          .then( res =>{
             setpro(res.data.data)  ,
             console.log("Thissssssssssssssssssssssssssssssss is the data ", pro),
              setpages(res.data.totalPages)
         
          }
                  
          )
          .catch(err => err)   
    
  



  };
  
  
  
  
  
  
  
  const [filtering , setfilterring]=useState([])
  
  
  const [page , setpage]=useState(1)
  
  const [totalpages, settotalpages]=useState([])
  
  
  const [ischechbox , setcheckbox]=useState([])
  const [isOpenCAtegoryFilter  , setisOpenCategoryFilter] =useState(true)
  
  
  const onchange = (e) =>{
  
    setcheckbox()
  
  }
  console.log(selected)
















  const [thispage , sethispage]=useState(1)

  localStorage.setItem('initialpage',thispage)

  const onPageChange = (event , value)=>{

    sethispage(value)
    console.log(value)


          const token = localStorage.getItem("token")
          const fileritem = localStorage.getItem("item")
          axios.get(`${import.meta.env.VITE_API_URL}/api/products/getbycategory`,
  
        {    /*  
              headers:{
                Authorization:`Bearer ${token}`
              }   */
  
              params:{
                categoryid:fileritem,
                page:value
           
              }
            }
  
  
  
            
  
  
  
          )
          .then( res =>{
             setpro(res.data.data)  ,
             console.log("Thissssssssssssssssssssssssssssssss is the data ", pro),
              setpages(res.data.totalPages)
         
          }
                  
          )
          .catch(err => err)   
    

  }




  const[sort,setsort]=useState([])


const OnChangeSort=((e) =>{

  const sorting = e.target.value
  setsort(sorting)
  console.log(sorting)
 axios.get(`${import.meta.env.VITE_API_URL}/api/products/getbycategory`, {
    params: {
      categoryid: localStorage.getItem("token"),
      sortingId: sorting
    }
  })
  .then(res => {
    alert("Sorted")
    console.log(res.data);
    setitems(res.data.data);     
    setpages(res.data.totalPages);
  })
  .catch(err => console.log(err))




   axios.get(`${import.meta.env.VITE_API_URL}/api/products/getCategory`)
    .then(res => 
  
      setcategoryitems(res.data.data)
  
  
    ).catch(err => err)

})

  
  const [itemview, setisitemview]=useState('grid')

  const [pages, setpages]=useState([])

const [items, setitems]=useState([])

useEffect(()=>{

  const token = localStorage.getItem("token")
  
  const filteritem = localStorage.getItem("item")
  axios.get(`${import.meta.env.VITE_API_URL}/api/products/getbycategory`,
    {
      params:{
           categoryid:filteritem,
           sortingId:sort

      }
    }
  ).then(res => {console.log(res.data.ProductsCounts)

    setpages(res.data.totalPages)
    console.log("Ttttttttttttttttttttotalpages",res.data.totalPages)

    setitems(res.data)

  })
  .catch(err => err)

},[])

const [open,setopen]=useState(false)



const pagenumbers = []

for (let i = 1; i<=pages; i++){

  pagenumbers.push(i)
  
}

console.log('Page numberrrrrrrrrrrrrrrrs',pagenumbers)

  return (



    <section>
    
       <div><Product/></div>

        <div className='container-side Product'>

             <div className='wellness'>Wellness Devices
            </div>
            <div className='ProductPage  '>



            <div className='side flex bg-white'>

 <aside className='Sidebar'>
     
      <h4  className='filters'>
        
        <div><button onClick={() => setisOpenCategoryFilter(!isOpenCAtegoryFilter)}>

        <div>  <div className='flex gap-3 items-center'><div className="flex w-[70%] items-center gap-2"> <div > <TbFilterCheck /></div> <div>Filters</div></div><div><FaAngleDown /></div></div> 
      </div> 
        </button>

        
</div>
      </h4>

      <Collapse isOpened={isOpenCAtegoryFilter} Style={{ overflow: 'hidden' }}>



      <h5 className='cate'>CATEGORIES</h5>

      
    <div className="category">


      
        <div className="scrol">




          


          <FormGroup className='text-f'>

            
{
      
      categoryitems?.map((product,index)=>(

            <FormControlLabel control={<Checkbox />}
            checked={selected === product.category}
            name={product.category} onChange={handleChange}  
               label={product.category}    />
   
            
))}
           
          </FormGroup>




     







        </div>
      



  <div className='avaiable ml-5'>
             <h5 className='avaiable'>Availability</h5>
             <div className='scrol pl-10'>
                <FormGroup className='text-f'>
            <FormControlLabel control={<Checkbox />} label="Available" className='avaiable ml-4' name="Available" onChange={handleChange} />
            <FormControlLabel control={<Checkbox />} label="Out of Stock" className='avaiable' name="Out of Stock" onChange={handleChange} 
            
            />
 
          
           
          </FormGroup>
          </div>
</div>


        <h5>Filter By Price</h5>
        


            <div> <Box sx={{ width: 300 }}>
      <Slider







        getAriaLabel={() => 'Temperature range'}
        value={price}
        
        onChange={setprice}
        min={100}
        max={100000}
        step={5}

        valueLabelDisplay="auto"


       
      />
    </Box></div>

<div className='price-f'>




        <div>From:-{price[0]}</div>
        <div>To:-{price[1]}</div>
        </div>
     
     
      </div>

      <h5 className='price-f'>
        Ratings
      </h5>

      <div className="">
        <Link to= "" >
         <Stack spacing={1}>

      <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly
    
      
      />
    </Stack></Link>

      </div>
      
      
      <div className="">
        <Link>
         <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      
      <div className="">
       <Link> <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
    </Stack></Link> 
      </div>
      
      <div className="">
       <Link>  <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      
      <div className="">
         <Link><Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      



      
    </Collapse>

    </aside>

    {
      open===true?
 <aside className='Sidebar1 absolute pt-4 z-40 bg-white overlay'>
     
      <h4  className='filters '>
        
        <div><button onClick={() => setisOpenCategoryFilter(!isOpenCAtegoryFilter)}>

        
        <div>  <div className='flex gap-10  !items-center'><div className="flex w-[70%] items-center gap-2"> <div > <TbFilterCheck /></div> <div>Filters</div></div><div><FaAngleDown />
        </div>
          <div className='text-blue-600 '>
        <button  onClick={(()=>{setopen(open?false:true)})}>
          <IoGridSharp />
        </button>
        </div>
</div> 
      </div> 
        </button>

        
</div>
      </h4>

      <Collapse isOpened={isOpenCAtegoryFilter} Style={{ overflow: 'hidden' }}>



      <h5 className='cate'>CATEGORIES</h5>

      
    <div className="category">


      
        <div className="scrol">




          


          <FormGroup className='text-f'>

            
{
      
      categoryitems?.map((product,index)=>(

            <FormControlLabel control={<Checkbox />}
            checked={selected === product.category}
            name={product.category} onChange={handleChange}  
               label={product.category}    />
   
            
))}
           
          </FormGroup>




     







        </div>
      



  <div>
             <h5>Availability</h5>
                <FormGroup className='text-f'>
            <FormControlLabel control={<Checkbox />} label="Available"  name="Available" onChange={handleChange} />
            <FormControlLabel control={<Checkbox />} label="Out of Stock"name="Out of Stock" onChange={handleChange} 
            
            />
 
          
           
          </FormGroup>
</div>


        <h5>Filter By Price</h5>
        


            <div> <Box sx={{ width: 300 }}>
      <Slider







        getAriaLabel={() => 'Temperature range'}
        value={price}
        
        onChange={setprice}
        min={100}
        max={100000}
        step={5}

        valueLabelDisplay="auto"


       
      />
    </Box></div>

<div className='price-f'>




        <div>From:-{price[0]}</div>
        <div>To:-{price[1]}</div>
        </div>
     
     
      </div>

      <h5 className='price-f'>
        Ratings
      </h5>

      <div className="">
        <Link to= "" >
         <Stack spacing={1}>

      <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly
    
      
      />
    </Stack></Link>

      </div>
      
      
      <div className="">
        <Link>
         <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      
      <div className="">
       <Link> <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
    </Stack></Link> 
      </div>
      
      <div className="">
       <Link>  <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      
      <div className="">
         <Link><Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      



      
    </Collapse>

    </aside> :''
}

            </div>

            

<div className='w-full ' >

  <div className='filter-bar cursor-pointer Products-Counts'>
    
    <div className='f-col1 w-[10%]'>

      <div className='text-blue-600'>
        <button  onClick={(()=>{setopen(open?false:true)})}>
          <IoGridSharp />
        </button>
      </div>
   

    </div>
  <div className='f-col2 w-[78%] Font-of-title  '>
   
  <div className='item-title-font w-full '>We have almost {items.ProductsCounts} Products</div>
 
  </div>
   <div className='f-col3 '>

    <div className='Sorting-resposiveness font-bold'>Sort By:- </div>

       <select className='option-bar' onChange={OnChangeSort}>
               <option>Relevant</option>
        <option>Name A to Z</option>
         <option>Name Z to A</option>
            <option>Latest to Oldest</option>
               <option>Oldest to Latest</option>
             
       
      </select>

  
    </div>
   





  </div>
 
 
              <div className="right-bar bg-black rightway ">

                <div className='w-[] Product-Apple ProductItem '>
                
                    {pro?.map((product) => (
                
                
                
                
                
                    <div className='Pitem'>
                
                
                 
                
                
                
                
                        <div className='imgwrap'>
                            <img  src={product.image?.secure_url} className='Img'/>
                            <span className='discount'>{product.discount}</span>
                            <span className='zoom'><Link><MdOutlineZoomInMap /></Link></span>
                            <span className='heart'><Link onClick={()=>AddtoWishlist(product._id)}> 
                            <FaRegHeart /> 
                      </Link></span>
                </div>
                
                
                              <div className='text-[12px]'>      <h6 className='info1 '>{product.company}</h6>
                            
                              </div> 
                
                               <div className='text-[15px]'> 
                                 <Link to= "/Detail"> 
                                 
                                 
                              <h7 className='info'>{product.title} </h7></Link> </div>
                
                
                
                                 <div className='Rating-Responsivesness '>
                
                                  <div>
                                  <Stack spacing={1} className=''>
                      
                      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                
                    </Stack>
                     </div>
                    </div>
                
                
                
                 
                       <div className='price items-center'>
                      <span className='old'>${product.oldPrice}</span>
                       
                       <span className='new'>${product.price}</span>
                      <span>Available ({product.productStock})</span>
                      </div>
                
                
                      <div className='items-center pb-0 mb-0 w-[full] '>
                      <div className='w-[100%]'>{product.category}</div>
                          <div className='w-[100%]  flex justify-end'>
                          
                 </div>
                
                            
                  </div>


                  {apple === null ?  <div className='flex justify-center bg-blue-800 text-white Addtobtns ADDCARTMOBILE  '>
                              <Link to="/Login" className=' text-white ADDCARTMOBILE' >
                
                            
                            <Button 
                
                            sx={{
                              color:'white',
                
                
                                width: {
                    xs: "100%",   // mobile
                    sm: "50%",    // small screens
                    md: "200px"   // desktop
                  }
                            }}
                
                
                
                
                
                
                      
                
                            
                            
                            
                            className='AddToCartbtn  text-white ADDCARTMOBILE '>
                
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
                
                
                
                
                
                
                
                             <div className="Mobile-btn-product">Add To Cart</div> </Button>
                              
                              
                              
                              
                              
                              </Link>
                            </div> :
                
                
                    <div className='flex justify-center bg-blue-800 text-white Addtobtns ADDCARTMOBILE  '>
                              <Link to="" className=' text-white ADDCARTMOBILE' >
                
                            
                            <Button 
                
                            sx={{
                              color:'white',
                
                
                                width: {
                    xs: "100%",   // mobile
                    sm: "50%",    // small screens
                    md: "200px"   // desktop
                  }
                            }}
                
                
                
                
                
                
                            onClick={()=>onClick(product._id)}
                
                            
                            
                            
                            className='AddToCartbtn  text-white ADDCARTMOBILE '>
                
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
                
                
                
                
                
                
                
                             <div className="Mobile-btn-product">Add To Cart</div> </Button>
                              
                              
                              
                              
                              
                              </Link>
                            </div>

                                    }

                
                            
                      
                
                    {apple === null ?    <div className='flex justify-center bg-red-600 text-white Addtobtns'>
                              <Link to="/Login" className=' text-white'>
                            <Button 
                
                          
                
                            sx={{
                              color:'white'
                            }}
                
                            
                            
                            
                            className=' text-white '>
                
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
                
                
                
                
                
                
                
                             
                
                              <div className=" Mobile-btn-product"> Add To WishList</div>
                              
                              
                              
                              </Button></Link>
                            </div>

                            :
                            <div className='flex justify-center bg-red-600 text-white Addtobtns'>
                              <Link to="" className=' text-white'>
                            <Button 
                
                            onClick={()=>onClick(product._id)}
                
                            sx={{
                              color:'white'
                            }}
                
                            
                            
                            
                            className=' text-white '>
                
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
                
                
                
                
                
                
                
                             
                
                              <div className=" Mobile-btn-product"> Add To WishList</div>
                              
                              
                              
                              </Button></Link>
                            </div>}
                
                
                              
                
                      
                
                
                
                    </div>
                
                 ))}
                
                
                
                
                
                
                
                
                
                
                
                
                
                </div>
               
           
           
            

            </div>




            <div className=' flex justify-center pt-4 mobilePageProduct '>
<div className='bg-white w-[50%] Products-Pagination  rounded-md shadow-md p-2 flex justify-center pagenomobile'>
  <Link to="/Product"> <Pagination
  to=""
  color='primary'
  count={pages}
  onChange={onPageChange}
  page={thispage}
  
  />
 </Link>
</div>




</div>
          
          
          
            </div>

            
            </div>





 <div >
               <Benefits/>

               <Footer/>
            </div>

          


        </div>
    







       


    </section>
 
  )
}

export default Products
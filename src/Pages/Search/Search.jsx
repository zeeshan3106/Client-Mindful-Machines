import React, { useState } from 'react'
import './Search.css'

import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from '@mui/material';
import axios from 'axios';
import './Search.css'
import img from '../UserProfile/Images/1.jpeg'

function SearchBar() {


  const onchangeelement = ()=>{
    let value = localStorage.setItem('key',value)

  }
  const [applestate , setapplestate]=useState([])

  const onapple = () =>{
    setapplestate("")
  }

 let apple = localStorage.getItem('itemss')
console.log(apple)
  const [state, setstate] = useState({
    name:""
  })
const [isdata, setdata]=useState([])
  const onchageInput = (e)=>{
    const {name, value}=e.target

    setstate( prev =>({
      ...prev,
      [name]:value
    }))

const  apple =   localStorage.setItem('itemss',value)


  console.log(apple)
    axios.get('http://localhost:8000/api/search/search-elements',
      {
        params:{
          searchid:value
        }
      }
    
    ).then
    (res => {console.log(res.data.data)

      setdata(res.data.data)


    }).catch(err => err)





  }


  console.log(state)


  return (
    <div className='container-s Apple-Search'>
    <div className='Search'>
      <input  type='text' placeholder='Search for products...' 

      name='name' value={state.name}
      onChange={onchageInput}

      onFocus={(()=>{
         const abc = localStorage.setItem("itemss","")

        
         console.log("apple " , apple)
        
        
        })}
      
      
      className="Box " />
      
      <div className='flex  Search-icons Search-Resposiveness '>
        
      <button className='Search-icon cursor-pointer '><FaSearch /></button>
       <button className=' cursor-pointer text-[25px] Search-icon'><IoCloseSharp /></button>


       


          </div>
   
    </div>

    

{ apple===""?"":isdata.map((product)=>(





     <div className='SEarch-Bar rounded-md shadow-md font-bold flex gap-5 items-center Apple hover:cursor-pointer hover:bg-blue-300'>
      <div className=''>
        <img src={img} className='w-[20px]'/>
      </div>

      {product.title} 
      </div>


))}
      
</div>

   
       
    
  )
}

export default SearchBar
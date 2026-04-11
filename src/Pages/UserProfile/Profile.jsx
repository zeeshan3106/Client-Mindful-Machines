import React, { useEffect, useState } from 'react'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import Footer from '../Footer/Footer'
import img from './Images/logo.PNG'
import Navbar from '../../Components/Navabar/Header/Navbar'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaHeart } from "react-icons/fa";
import './Profile.css'
import { MdStarBorderPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'

function Profile() {
  const [profileitems, setprofileitems ]=useState({


    Name:"",
     Email:"",
    Phone:"",
      Address:"",
      Nationality:"",
       DOB:"",
            UserName:"",
            
            LastLogin:"",
            Image:"",
            CurrentDevice:"",
            DeviceName:"",
            Country:"",
            State:"",
            PostalCode:"",
             Street:"",
             Landmark:"",
              ProductCategory:"",
              Language:""
              ,Currency:"",Reigion:"",
              Facebook:"",
              Instagram:"",
              Youtube:"",
              Linkedin:""




  })

  const [edit, setedit]=useState(false)

  const onchange=(e)=>{
    
    const {name,value}=e.target

    setprofileitems(prev => ({
      ...prev ,
      [name]:value
   }))

  }
console.log(profileitems)



const onsubmit =() =>{

  const token = localStorage.getItem("token")

  axios.post('http://localhost:8000/api/frontend/profile',profileitems,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(res => {console.log(res.data)



    toast.success("Successfully Updated")
  } ).catch(err => err)
}

  useEffect(()=>{


    
   


axios.get('http://localhost:8000/api/frontend/profile-items').then(res => console.log(res.data)).catch(err => err)





  },[])






  return (
    <section>

      <Navbar/>


        <div className=' justify-center items-center ' >

            <div className='left-part bg-white w-[100%] rounded-md shadow-md'>

                <div className='' >
                   <img style={{
    width: '100%',
    height: '300px',
    objectFit:'cover',
    objectPosition: 'center'
  }} className='Mobile-Profile-Image' src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUWFxcXFRgWFxYXGBUXFRUXFxcYFxcYHSggGB0lGxcXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGislICUtLS0rKy0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS4tLS0tLf/AABEIAI0BZAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADYQAAEDAgUCBQEIAwACAwAAAAEAAhEDIQQSMUFRYXEFEyKBkaEUMkKxwdHw8QZS4SNyFTNi/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgICAgEDBQEBAAAAAAAAAAECERIhAzFBBFFhEyJxkaFCMv/aAAwDAQACEQMRAD8A+ZMpEC6jKZOnyja07GeiIsdF7HZeyz5th02Wue+3x1R1AIgGd73+Dysjnkfe/NUzEbfVUUyZbpzQ5p5+UphkrbTe0b9yqVslJ2YXEjuBHZZ6j8psYCe6qAdJV/aBo4A9I0UMozeb1TQxut0L8PmPo04JASQSNVo2ETflaGEGAD3SqLWnUwFpptboP7UsjZbqAOizZiLLSymf+8IyAPvCes3SzOVCqIUyif4U8vB0t+qSCW2I191SWaBVDR+Wn8CnnE6T22PVZCwk7zumsqRYaIGOc8dJ+UDawNnD3CS96bR/2An4Qg8Ni4jpOp9kqpQMTb5CF+abHrZET/OqgsQI5RfVO8hs3+QmhjODCthyMmULTRoOfZlNzoEnK0uIHJgWQGlJhkknQRJ9l6HA+C5Y/wDMRXBaQ1ohusmahMExtb3WOTkUVdl7ORhfBn1WuLAPTMguaHemJAaTJIkLIafde4r4vIZc0tDPvF5phz3wRZoFyYiTNjN0l1Pw9wFTyoBBBayoWtBG8C8mDv7Wv5Iesf8ApfijOR5yh4HXqAFlJ0ExmNgLxJnQA7pbPBMS5zmNoPJbqbRto7Q2INjuvReNY1lby8pDKVOAPWMxDQAQHlvqIMTJM9xClTFuy5aLjUyjLBzFsgkktqA2M9Pqsv1fJ7Itnk8RgqlMgPaWkjMAeOUt9FwiQbgHSLHQidjyvU0vGacZaznsJt6TqC4TLzJcIF2HcmUzxTD4bEEVBiKgc2GuDwC7KP8AUWJNz8QukfVbqSotnj3EDZL1Nl1fGPD2U4yVC4OmzxDmxBExY2I4I4XObSjWATyvVCalFSQTBDIkgg9kT6xG5H6pVUwYSXdVaNJWahiiUp17mUk6WQEpRaoJ1kMLU0hoiNtwnNqEgCwB7AHuo5EcjlkomkLoBgNoHtp9UDsKLaDm/wCUJYzRkhA7uttYsFoFxrp9EvDNbMxpe/7JZU9WA2ieD7AlRPbiByfqopbJkzC+sd79QgDzos7HJreiG8Rz6RP8/NKLIKNlW0FCXX/ZVA0hmUfyfZKNRUHHTU8nZE1jRdxkdP8AqWQHzFYet7HtIuGkbCBP00QU8QWEhjRpwD9SpkSxbM0TBhSre4KdmdJmOoIlOGCDhOW/DSBHsUyrszdHPYYK14ekT0HwmFxZ6ZgcAAk9TwqeWO3InfjuN0yDlZHYiJAA/P8AtWKn+xB/MfsibQaz8Wad9h3QOwsmAR+UDqraM6GNYNiB3Ksuyi8afyOEp2GcLCHX2Kp1EwJFlRSIcRtr31STU3laPswGsj2/VWGNGjZ+qpbRn11TKMTF4GpTnU52IVPcA2NOyEuwH1yNLImuSc8XUD51QtGl9aV1fDPDTVBLnGmDGUlpIIkgkX5H58LmYDD1HPiiw1HABxDWzYHjuvQ0W4prSKhk2gWc4G5GaDA43Pbfz883FaasjSSDx2fChrKUNMkFzgC4yTmzOAs2wENNjB1QYStUDg0FryZLmtcwHYAuzWaRx11KTmrw59WplaCZaz78WOv+pMCTJnZYMV46xhyUmMaR6WuAc5zpgyc33jprzZeCnL5FN6OzigXuOfymk2DRwLiMolztJuNERoYYMLGB2YzLiwgsNxN5Lp6meFwqWMxFQkOaBuJmk6/tmImL9QkYhuRzXVMwEw5wfpedrkE8x0Wvp2krCi0dOngS+W1nOIGmRwAEAkH1gN+bR2SqvgTi8udiabKRsHQXOAJEAgEC/quHbdUGDxXmGKL3sDT6jUd6SwzqAdz3O9iVtreIvqPyOFOoQNQIIOtiIIA47zurKU06QtxEt/xZ7QZyVGuiKgfUBaHQfU1oJB0146IMJQpUZbUAqFxEOMgtE2AcYn3jey6zafqDm16VMOGYmbNN4DhmvrFgfZZsL4fh2FzxU8x5HqqZmua03dmyOaYEiJkm6wuR08v4MnJdnTptLwGZA9kEEZMzmkiJY4BxB+6RpoeFx/HfBIcPKpViMgLpaSRcyT/Q25QYXxbFMeCaVSoRJEtf6SDe0C0AWi66df8AyGp97yG57SRy78JFr6XCkJcnHya6/JjaPL+K+E1KJAc0TEwC029tCuY4Hey9ufFxWa1tWm14GjLtIsYymJjSw+sJeK8EwT2gte6ibgg5rk6TnmALiwvb39cfVqKS5F+ujpGfueJY5E25sunif8crsD3ZQWNmHAgZ2gTnYDBc2OOyyNwx0kDnnsvVGcZbi7Ntos9NflJki8IskH7s+9u8hDUMiwgjjhRmUPc7fMOL6JL6uUdeef2SKrxpAUZWjb9U2XE0l4/GATtB/Pok1a4i0D5ugfDhZvus5puFyIHJRFURoqnkKIG9p7qKmqF08ITrA+q0U8FwQe9kllUdFfmCQsWw7HmgYgwPdKdQcNp7GURZNw4Cbgfsha87e4VsisBrSNbJvmCLiduyF77fyUh7lezSVjc15BVtqkHUjlICJpk3KpaNrnudaPzVVDeCb8pRrbfJ3SnHhQxRtbiyBZ0/mr+0g9+SFglW111aGCOnRqjeT2t7oHVRfvus9OpyjLYvYqGcQm1rQCnOxR0WJ47qZ1ouKN9KsYvJVuv+IWCxNqwbWWrDucREfoqZlGjVTrN3155RGlOhA95j9kovgxM/WOi0+GYdr6jWOzAEx6RJjU9hG6jdKzlQTME9zoaHOnZoJmNSLadVswfhFFzC+o6oXAx5bWZSPUQZdfYG0C67NbxCuMxe8+WwWZmiBYMGUi46zAm6x4nEYjEMikw7E1MhadCC6RZ1uei8EvVSapa+TSF43xoU2mnhmtZTkH0g3MQSXOu6QBr+pXPo4qs+7qRIIkuIgReC0mALGLKqOB8lwOIeaj5JFMFuQAbvdc9ctvmy5nivjrnOjyw0C0AuySNCATH8Kyl7fs2o26WzoY2jTyNaar6TcpJptJOsGS4iJidZ+7tos2M/ylwhrQwNFmxMgAAW/u/yubhvBq9ZwLSCSRmOb7oMazbcCBz0tswvgIY8mq5lVguBSIdmPBkafOi64o6YwX/Ts2jFnEt/+3K0H70QQYk2kudtoRO5vK0eHYGixofLajj93zGODbj0+lwOYwDeQAkYzxMD8DmtgFjA65Am5aDbUfG0X4fjHi/mWbnA/wD1lBt/6+6yo+CKLl1pHoWV6FAl9xUIktpulg/1uRJ02IGin/zzy0QzzDs97C5wEAGDMWg/Hx5XBY0Na4EAmLZoOY352HHVaDiXuHqmCLkCI7bEdFpx9w+Hezr+N4h1Rpe5zWWDiz1SSXG4m2+xRf49ig17SBnBm0EGZsbXdEm/dcHz5Zkgkm4MiHTb1DYj3/bq4DwyqBnNRjQNQCTpMjMPSLgb/XXLiqosoVGj0tau2oPXVLXiHelxkXzDWGm0DTdeZ8dYc/lh5cQbBuab7yZv79kXiGJp1ZJflewFovIMEwDa+us90GGxTGgOc/M6IEx6Gk3H3efe6zFYmIceOxbXBrQ65I7HcRI21G69D4Z4xhsjPNaCRMiTM7w6bD/q8/ja9J4BziYM5TfpPMfWB7VRpBz83mNfTI/0zOEC0ti2952SUFNbK4JrZ7WjXpvNix7XfgeWiWhsw2AQDO5Ag6dPM+I+H1KV3NaA4kA5g42g3I6EJ9FtP0OZLiGiIIDhIFr2+brq/aqGJaadSnDwLEnK8F1pE+k9jqQNVjjk+GWlrycVpnkvMJs4gfX+kp4I3kbJ/iGDNKoWObMyWm4zCYmDoeh0WZjgf+2X0U09o7IQWGVG0jrBj3RvJYZ2KjsQZkJZq34LDADJMDgIziSLN06pL631SnPBShV9mlz2m5An4UWbN0UUo1Qks4RMJT8g3t8IMg/C4+407rNlyAdVPKLM5NpNYNfUZ2tC0OJizZHWBB6q2Zcl7GMVTx+yW47rT9r5DSiqYhrgDlaSlltrwZC5RruUNRhvayBas3Q8uVSlsRgJZKDlSVTtJQyqShrXp7KkrGEfZCNDs0aq2XMASs4etlAECRuqZejRTw8awOTP7LRSaYN7bX1XObUuu14HhjVfBacjRLiNheAT1IhSUsVbOckx3gXhtKpULar3tJaS0tAyiIu4kzvoP+LpNq0sPTPkyXgia1RpvAM5Nmt6CZkdE9+PpNBBLWU2/hptiZkAWF7HNeZjqvN43FMqghjsjBBIN3HU7ai31XzZ8kuSXlIK2TD4wVMRNVz3C+XKYLnQAB0EAp3iv+R1GmxEbCIymb2HTmU3AUKeFBqZyahYIsz0ZgLBxJEwTcdui4lSvTNXM4PqCfVYb7NmQb7nVajFN/B0STfwFXx3pkGo4ugF0EAz6jlAN9z7fEo4thdlfnAFnPIOeZBgCYA3utFXxdwHoBY5xFvxZALQ47C8a6lJZ4liTMuc5txLoNr2lwPVdV0VJ11/QsXWbTY4UzIcRmdZufLOkHYztx3SPC/EGUWlzSPMJEekEtG5BcJFrSOeiw4kMNqbCHTeCXCeBO2qHCYSZLwco9p5Gtlqjpgsdm3xfxd1TRxI3kCZsZnkkX7brl02klbsN4eHObLgxpJIJ1IGw5Nl1sJRoNa/yxL23LqhDvTF4bprPymkiZxiqRxKOAc5wzgsYTBdBIFptyTsuhWxtMiGyANC6DJgAT8kpuL8QqNIGcEDdrXekybQbc8lcgVcznOLQZuZv1txJ/VTsquW2N+0vc/NT1ggQLwT07hSln6xuOdNbdkfh9Wkz1OzEk6N4te5ubkDZdCjiGSIYHh0kS28xOgtI77I/wAElJrVHJDsrrfrytzsK2q6WkzsDAEja/S9lMTgZh9Mht9STzaTzPuIi6wvrOBLZuLHTXpHbUJ30F920EMFyYOmSxIN/wBltw+Dcz1OgNncm5jprab9IRUvFSYY8yBpMyB0IuLJ1Z7Wgw4QRIFzmsZk6kTB309lG2Zbl0xdKuaLsrYy6gESBI9QDo/n1W77S6Wh+0hpAJne5md/z1XGq4p5GXOBFy0zzIgxwfp0W7wp+ZmV3rbMQD6hexEQSPdZkrVklGtnWfh6eIYw1HlrmtyiI3M5zIkiZEarh43w91J+V0aSCDmBB0cCNjrdddmHfctrAtaDapaL6EG1jNuuuydhHmCM9F4IiH023Ga+WBcafCQ5MVSdo4qVfg82QR1QZJ1Eey3+MUhTquDcpEyMugBvEbdlgcDvK9Kdq0dUyhRGt/2Sns4CMvPKoztdU1sFrRuLqIgTx8hWllKDp2CrNydEhr4OiIv9lkYjTXd7fRNpCLyfhZHkn2RNBOphUjiaKnQD4S/IJuBCjIARBu8/NvhCdE8hxubRz/LqmUGblyY1o3dm44/NR9Q9P1CWMmAaDNnIRhjsQeLoy+dYPJG/dWHN4SxbAfTIABBCW5vC15iOfzBS6jZu2ByFciqRmBRZ7Kni6mVaRodh6YOs+y0OdaAbJFIwFRcCVTD2zRSgX4Xc8OqF2HqZ3FrM4uG3ccp9IJtH85XnQ+OV2cJ4gH0qdAtPpLiCT6bkuNtt+ptC4+oTcKSMtB4ZlNzgAHONjUc4zlcTZoDoDiSI3P61jamSadMscQ6YjMS4ka/hdAaNeTZTy8gdE3y/cn7+k21i+nK4ryQ6RdxDjqLCDJXlhGypWzdiqmJcCXC0eokghxuJtwCbbWRsxjaVKZzumeR1F5vA1P6GeRTe64zEAEE+x/6rq1s07CZ0g32XWjpgBXxLqhzHXcjppAHFrLpNpkeguOU2NxYG0ujfoTysJp7gOBFwMv5kkb90+m+o/KQcgm8m5zCcwb2IuTujaLKLfQGRgJLTECw10F7oarmubAtplE3PsO6U7DucTJuObWJAmfcIfKykSIaTcOEgGORcC/8Aa1kaUfkdg2NY7M90EEjKLuOotNo6qhSl1+C68AQJO6YHupgNeACNCb5g6Py5Ti2KYqGSTAaNpcDB/mwKlkfYDvFnSYOUEfhuIsLcW37LmmoBzfWN+PzW3HeGvZVYzV1RodciZd96YJ3BjusGQdYm8d9vZE14NRjFdG2nXBaYaAJBkD6CTZLfUE2mPf8AddDEtYGtIBABbEkTe5iBBIG/DVlrMu4ncz8691IuzLoz1KhBhriA7W5juQCtNKmw/fqNDugP57dlTaDCNSDodTb2SfspDiO0EcLQtPyaqrZ4INiTII/TSEdOnSDRBk9CQfcQQfhZXE2zOm5BB1AknYoaJgzO8f8AYmVOyV8mhtUPsNROs35jprboga7y3gggnYNzbqhRBObXe1rnWyGC31M/QgTqLfCrCo72B8YLh/5DkkEZtLwdgBIJO86bpuHrNLm3kg6tIiCB+EaaH3538+KwcTn0PGx3jk90WEqCSJ1ETyDx1/Zc3xo5viVHdztxDTnIzNnK6zTHDuZi06dJXCrNLXFpEEGCNNE0ekmTEEQRImdxyq8UYAWubMOaNSDcWiRraFvj+11YUa0ZXVttFQelPbuowFdzdIdPVRUAqQggxsoHSl5doTadLmVk6OkWXSmtda5HRTJxohyjT5VMaZec9FMx3TxlA0n3I/tF5ze3uhm/gzNcOeyaHz19ktwE3/tWX2tb9UKwsgBsflGWA6O9gNUmpU5CCm6eiCma2cAkHf8ArZVAiQb9krzf+qObIt+yGaArG6EOVkzrqFTQtJmxrXWVmEtUAVbJQ6mLzsuzg3BtMOyhziZaTENDdInUk/kFw9FppYqcjXzladtcvbTc31uscibVIy1Zpfjbtu6ZcY9My6RJkWWDEuOYk321mOBKqscxm3tATMPQH4oB2kj6grh0dEkjTSwoAbmj1CReNRI6f2NFTsjXEsvOk6CIjUX6qHE5Q1oM5esiXDS3Ex7LO92+i3x8d7kYbdmmq4vJmADvvHU7pmEeaYO8iNBYdzvG/RYvNKrzCty4lJURNo3VaNpyiTcRuI153B/hSsfUzCJ9NrNsCSBNtAYn491mr1nOiTYRxsICVnUjxV2aV9l03BxyPMwC1vzY90dKo4ODHOs37nCB9IHoef3SalT8L9diFrGja2aPG8QX1c49Jho13A2PvPuk4XB+YCWnTKDa5c/QW2m0/RLc+bm8D5Mm/wAR8I8JjnU2FrTGYgk7iJFv5yuLTS+02k0qRpZiI9TxJJdAt6b3gHS4+ndLrVy8+hhFtAS46ayAl4emCZfMDQc972WuvWBDQyWxroBfgN/NVcbsy2kBSoVCJ0bvcXPQe66GNoU2mM5BBEg65e2oM3jgi91gp1HDRxFwddwCAfgn5QbyTJ1/hVfC29s5t2bXYdty12gh0mC086TZY8RQ9QGn3R22VyUypXLvvX9h1391PpSXkqlQmtI9I0tx+fN0LqjmiNpkd4/r4CuOtkDuv8hbjH3FhNqB33tdoHaP1SgCNLHblWAEdPropKNbNJjGVpBzGeOhuhrVMxHQQRsEvLMI4ASMV2ZbL2QEqZkLlshZUQEqIWgm1pHIVlwi1j3WZhTqbugWStULdVO6MPUxAnRJaqWk0OzqsyXBV51RQ8ydTdJc5E0oHIEESSFGMUanZR1VI3RGtCJ5jeUBbxKqZ1SjIVTkIZKsqBaoEa5FmVAK4VohCVUqAKFAQuVZlFSFDDlCUAVoC5UlRRARRRSEAQche2dVcKFKJZlqtiybSpc/HCHED1fCaVzikztJug5UJVAq10OJGuRwlqEoBgcqcUrMqlZZaDzKQqBVFygDBhXnSC5TMhaGl4QlyVmVyoXEIlCXIZVOKFoKVECtCiwilKLlYcsm6Dc8qBCHIg5UhatDmUzpZKGhyvKlisi85VNGWmMCJqT5ysV1rJGcWNVFL89V5yZIYsOUQKUKoV+cEyRXFjwjAWcVwp9oVzRnBmiFRakfaVDiVM0MGNIVFJOJVfaEzRcGOUSftKgxKZouDHypCR9qKn2opmMGaQ1EGrGcQeUPmqZjBm0xyED6rRpdYjUVF6jmzS4xxdPeZTqbhv7LHmUzrKdGnGzoQOQpCwZ1YqlazMfTZtIQrMMQeUX2kq5kwY4hTKkHEFV5x5UzLix8IClecVPPKmRcWMVIPPKrzksuLGKpQeap5qWMWGqKHzFXmJYphKIfMUSy0xKkqKLCOhcqSqUSwXmVSoolgkq5VKICSrlUogLlSVSiAvMpmVKIC8ykqlEBcqSqUQElSVFEBJUlRRARRRRASVFFEBFFFFLBJUlRRWwSVJUUQElSVFEBJUlRRAXKpRRARRRRASVJUUQEUUUUsEUUVoD/2Q=='}/>
                </div>

                <div className='p-3 flex items-center justify-center  gap-5 w-[95%] Mobile-Profile-PartOne'>

                    <div className='w-[20%] border shadow-md  Image-Profile-Page flex items-center justify-center overflow-hidden Image-Mobile'>
                        <img className=' block w-[100%] h-[100%] objrct-cover ' src='https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-1/461156257_1735186470353036_2438694730772632876_n.jpg?stp=c0.0.683.683a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEnkNY7Vk_KMyxFUY6WqAv2QFrUorSdIR9AWtSitJ0hH4nf3j6YbvxhSk-LVnlEW5g5rV381ZLCbDj55eS3c0zZ&_nc_ohc=6rVu5kkwtjMQ7kNvwElGUP4&_nc_oc=AdpZ3OAdO-BDPWYMueuoyVOl3T1QHMLI1SaiBLR48KSymr1kdKolTVNdv5ZIyIclXqI&_nc_zt=24&_nc_ht=scontent.flyp6-1.fna&_nc_gid=c2QBbuM3dxVFpiubIawxLQ&_nc_ss=7a3a8&oh=00_Af1pCL52jCDQoJMXmpFmoapqPnLZ8JIUcOgDjQb29HhYGw&oe=69DC0140' /></div>
                            <div className=' w-[40%] font-bold text-[25px] Mobile-P1'>
                                <div> Zeeshan Ali Zafar</div>
                                  <div className='text-[15px] text-gray-700'>zeeshanalizafar53@gmail.com</div>
                               


                               
                                <div className=' gap-1 flex w-[30px pt-2'>
                                  
                                  <Link className='cursor-pointer w-[25px]' to="https://web.facebook.com/profile.php?id=100015850997278">
                                  <img className=''  src = "https://img.freepik.com/premium-vector/facebook-logo-vector-facebook-official-logo-vector-facebook-logo-illustrator_1002350-1803.jpg?semt=ais_hybrid&w=740&q=80"/>
          </Link>
        
              <Link className='w-[25px] ' to="https://www.instagram.com/zeeshan.ali.zafar?igsh=MWExMmhvZnB5eno0bA==">  <img src="https://img.freepik.com/free-photo/instagram-logo-3d_23-2152000279.jpg?semt=ais_hybrid&w=740&q=80" />        </Link> 
              <Link  className='cursor-pointer w-[25px] ' to="https://www.linkedin.com/in/zeeshan-ali-zafar-22103b250/">   <img  className=" " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJhm9N7gGP7dAPXocMOz0IBDksmFMFc-_9A&s" />
            </Link>  
                                </div>
                                </div>









                    <div className='flex gap-5 font-bold text-[18px] '>
                        <div className='flex flex-col justify-center items-center  '>
                            <div className='flex justify-center items-center text-gray-600 text-[15px] '>

                              <IconButton><MdStarBorderPurple500 className='text-green-600 text-[20px]'/></IconButton>
                               
                               
                               
                               Orders</div>
                             <div className='text-[20px]'>2000</div>
                            </div>
                         <div  className=' flex flex-col justify-center items-center CArt-Flex-Profile'> 
                          <div className='flex items-center text-[15px]'>
                                <Tooltip title="Click to see loading">
      <IconButton >
        <ShoppingCartIcon  className='text-blue-700' sx={{fontSize:"19px"}}/>
      </IconButton>
    </Tooltip>
                            
                            
                         <div className='text-gray-600 text-[15px]'> Cart</div>  
                            
                            </div>
                             <div className='text-[20px] '>2000</div></div>
                              <div  className='flex flex-col justify-center items-center '> 
                                <div className='text-gray-600 flex items-center gap-0 text-[15px] text-red'>
                                  <IconButton><FaHeart className='text-red-600 text-[18px]' /></IconButton>Wishlist</div>
                             <div className=' text-[20px]'>2000</div>
                             
                             </div>


                             
                    </div>




                </div>
                


            </div>



            <div className='bg-white mt-2 rounded-d shadow-md Profile-Personal-Details flex Gap-Profile justify-center Mobile-PartTwo '>
              <div className='w-[50%]'>

              <div className='font-bold text-[18px]'>Personal Details </div>
              <div className='flex flex-col gap-3 pt-4'>
                <div className='flex Profile-Personal'>
              <div className='font-bold text-gray-400'>Full name:</div>
              <div className='font-bold text-[15px]'>Zeeshan Ali Zafar</div></div>

              <div className='flex Profile-Personal1'>
               <div className='font-bold text-gray-400'>Date of Birth:</div>
               <div className='font-bold text-[15px]'>14-12-2002</div></div>


               <div className='flex Profile-Personal2'> <div className='font-bold text-gray-400'>Nationality:</div>
               <div className='font-bold text-[15px]'>Pakistani</div> </div> 
               
               
               <div className='flex Profile-Personal3' ><div className='font-bold text-gray-400'>Address:</div>
                  <div className='font-bold flex gap-2 items-center'>

                    <img className = "w-[25px] h-[18px] text-[15px]" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PytjB3DjtSi1EPRy3kPvmiGxCP6S4TW9Hg&s" />
                    
                    
                    1 Melbourne St, Islamabad</div></div>

                  <div className='flex Profile-Personal4'>
                  <div className='font-bold text-gray-400'>Phone:</div>
                   <div className='font-bold text-[15px]'>+923098789844</div>
                   </div>
                           <div className='flex Profile-Personal5'><div className='font-bold text-gray-400'>Email:</div>
                            <div className='font-bold text-[15px]'>zeeshanalizafar53@gmail.com</div></div>

</div></div>


<div className='w-[50%]'>
<div className='font-bold text-[18px]'>Account Details</div>
         <div className='flex flex-col gap-3 pt-4'>
                <div className='flex Profile-Personal6'>
              <div className='font-bold text-gray-400'>User name:</div>
              <div className='font-bold text-[15px]'>zeeshan3106</div></div>

              <div className='flex Profile-Personal7'>
               <div className='font-bold text-gray-400'>Account Created:</div>
               <div className='font-bold text-[15px]'>14-12-2026</div></div>


               <div className='flex Profile-Personal8'> <div className='font-bold text-gray-400'>Last Login:</div>
               <div className='font-bold text-[15px]'>14-12-2026</div> </div> 
               
               
               <div className='flex Profile-Personal9' ><div className='font-bold text-gray-400'>Password</div>
                  <div className='font-bold flex gap-2 items-center'>

              ********</div></div>

                  <div className='flex Profile-Personal10'>
                  <div className='font-bold text-gray-400'>Current Device</div>
                   <div className='font-bold text-[15px]'>PC</div>
                   </div>
                           <div className='flex Profile-Personal11'><div className='font-bold text-gray-400'>Device Name</div>
                            <div className='font-bold text-[15px]'>Apple 17 Pro</div></div>

</div>

            </div>
           </div>



           

              <div className='bg-white  rounded-d shadow-md Profile-Personal-Details flex Gap-Profile Mobile-PartThree  '>
              <div className='w-[50%]'>

              <div className='font-bold text-[18px]'>Address Details </div>
              <div className='flex flex-col gap-3 pt-4'>
                <div className='flex Profile-Personal11'>
              <div className='font-bold text-gray-400'>Country:</div>
              <div className='font-bold text-[15px] flex items-center gap-2'><img className = "w-[25px] h-[18px] text-[15px] " src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PytjB3DjtSi1EPRy3kPvmiGxCP6S4TW9Hg&s" />
                    
                    
                   Pakistan</div></div>

              <div className='flex Profile-Personal12'>
               <div className='font-bold text-gray-400'>City:</div>
               <div className='font-bold text-[15px]'>Islamabad</div></div>


               <div className='flex Profile-Personal13'> <div className='font-bold text-gray-400'>State / Province:</div>
               <div className='font-bold text-[15px]'>Capital Territory</div> </div> 
               
               
               <div className='flex Profile-Personal14' ><div className='font-bold text-gray-400'>Postal Code:</div>
                  <div className='font-bold flex gap-2 items-center'>
44000
                    </div></div>

                  <div className='flex Profile-Personal15'>
                  <div className='font-bold text-gray-400'>Street Address:</div>
                   <div className='font-bold text-[15px]'>1 Melbourne Street, Melbourne</div>
                   </div>
                           <div className='flex Profile-Personal115'><div className='font-bold text-gray-400'>Landmark:</div>
                            <div className='font-bold text-[15px]'>Faisal Mosque</div></div>

</div></div>


<div className='w-[50%]'>
<div className='font-bold text-[18px]'>Preferences</div>
         <div className='flex flex-col gap-3 pt-4'>
                <div className='flex Profile-Personal16'>
              <div className='font-bold text-gray-400'>News Letter:</div>
              <div className='font-bold text-[15px]'>joined</div></div>

              <div className='flex Profile-Personal17'>
               <div className='font-bold text-gray-400'>Products Categories:</div>
               <div className='font-bold text-[15px]'>IT, PC, Men Shirts</div></div>


               <div className='flex Profile-Personal18'> <div className='font-bold text-gray-400'>Dark Mode:</div>
               <div className='font-bold text-[15px]'>Not-Activated</div> </div> 
               
               
               <div className='flex Profile-Personal19' ><div className='font-bold text-gray-400'>Language Content</div>
                  <div className='font-bold flex gap-2 items-center'>

              English</div></div>

                  <div className='flex Profile-Personal20'>
                  <div className='font-bold text-gray-400'>Currency</div>
                   <div className='font-bold text-[15px]'>AUD</div>
                   </div>
                           <div className='flex Profile-Personal21'><div className='font-bold text-gray-400'>Region / Country</div>
                            <div className='font-bold text-[15px]'>Asia/Pacafic</div></div>

</div>

            </div>
           </div>
        





        <div className='bg-white mt-2 rounded-d shadow-md Profile-Personal-Details flex Gap-Profile1 justify-center Mobile-PartTwo '>
              <div className='w-[50%]'>

              <div className='font-bold text-[18px]'>Personal Details </div>
              <div className='flex flex-col gap-3 pt-4'>
                <div className='flex  items-center Mobile-Text-Resposiveness'>
              <div className='font-bold text-gray-400 w-[35%] Mobile-labelTextboxes '>Full name:</div>
              <div className='font-bold text-[15px]'>    <Box


         



      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField   onChange={onchange}  name='Name' value={profileitems.Name}            sx={{}} id="outlined-basic" label="Full Name" variant="outlined" /></Box></div></div>

              <div className='flex items-center  Mobile-Text-Resposiveness'>
               <div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>Date of Birth:</div>
               <div className='font-bold text-[15px]'>  <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='DOB' value={profileitems.DOB}    sx={{}} id="outlined-basic" label="Date of Birth" variant="outlined" /></Box></div></div>


               <div className='flex items-center Mobile-Text-Resposiveness '>
                 <div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>Nationality:</div>
               <div className='font-bold text-[15px]'>    </div> </div> 
               
               
               <div className='flex items-center Mobile-Text-Resposiveness ' >
                <div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>Address:</div>
                  <div className=' '>

                   
                    
                    
                     <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    ><TextField
  label="Street Addres"
 multiline
  rows={4} 
  variant="outlined"
/></Box></div></div>

                  <div className='flex items-center Mobile-Text-Resposiveness '>
                  <div className='font-bold text-gray-400  Mobile-labelTextboxes w-[35%] w-[35%]'>Phone:</div>
                   <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='Phone' value={profileitems.Phone}    sx={{}} id="outlined-basic" label="Mobile no" variant="outlined" /></Box></div>
                   </div>
                           <div className='flex items-center Mobile-Text-Resposiveness'>
                            <div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>Email:</div>
                            <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
        <TextField onChange={onchange} 
        name='Email' value={profileitems.Email} 
          required
          id="outlined-required"
          label="Email"
        
  
        /></Box></div></div>

</div></div>


<div className='w-[50%]'>
<div className='font-bold text-[18px]'>Account Details</div>
         <div className='flex flex-col gap-3 pt-4'>
                <div className='flex items-center Mobile-Text-Resposiveness'>
              <div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>User name:</div>
              <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='UserName' value={profileitems.UserName}    sx={{}} id="outlined-basic" label="username" variant="outlined" /></Box></div></div>

             
               
               
               <div className='flex  items-center Mobile-Text-Resposiveness' >
                <div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>Password</div>
                  <div className=''>

              <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField    sx={{}} id="outlined-basic" label="password" variant="outlined" /></Box></div></div>

                  <div className='flex items-center Mobile-Text-Resposiveness'>
                  <div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>Current Device</div>
                   <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='CurrentDevice' value={profileitems.CurrentDevice}   sx={{}} id="outlined-basic" label="Current Device" variant="outlined" /></Box></div>
                   </div>
                           <div className='flex items-center Mobile-Text-Resposiveness'
                           ><div className='font-bold text-gray-400 w-[35%] w-[35%]  Mobile-labelTextboxes'>Device Name</div>
                            <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='DeviceName' value={profileitems.DeviceName}   sx={{}} id="outlined-basic" label="Device Name" variant="outlined" /></Box></div></div>
 
</div>

            </div>
           </div>

      <div className='bg-white  rounded-d shadow-md Profile-Personal-Details flex Gap-Profile1 Mobile-PartThree  '>
              <div className='w-[50%]'>

              <div className='font-bold text-[18px]'>Address Details </div>
              <div className='flex flex-col gap-3 pt-4'>
                <div className='flex items-center Mobile-Text-Resposiveness  '>
              <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Country:</div>
              <div className='font-bold text-[15px] flex items-center gap-2'>
               
                    
                    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange}  name='Country' value={profileitems.Country}  sx={{}} id="outlined-basic" label="Country" variant="outlined" /></Box></div></div>

              <div className='flex items-center Mobile-Text-Resposiveness '>
               <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>City</div>
               <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange}  sx={{}} id="outlined-basic" label="City" variant="outlined" /></Box></div></div>


               <div className='flex  Mobile-Text-Resposiveness'> 
                <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>State / Province:</div>
               <div className='font-bold text-[15px] '> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='State' value={profileitems.State}   sx={{}} id="outlined-basic" label="State" variant="outlined" /></Box></div> </div> 
               
               
               <div className='flex items-center Mobile-Text-Resposiveness' >
                <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Postal Code:</div>
                  <div className=''>
 <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='PostalCode' value={profileitems.PostalCode}   sx={{}} id="outlined-basic" label="Postal Code" variant="outlined" /></Box>
                    </div></div>

                  <div className='flex items-center Mobile-Text-Resposiveness'>
                  <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Street Address:</div>
                   <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
     
      autoComplete="off"
    >
      <TextField onChange={onchange}  
      name='Street' value={profileitems.Street} 
       multiline
      rows={4} 
      
      sx={{}} id="outlined-basic" label="Street Address" variant="outlined" /></Box></div>
                   </div>
                           <div className='flex items-center Mobile-Text-Resposiveness'>
   <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Landmark:</div>
                            <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange}  name='Landmark' value={profileitems.Landmark}  sx={{}} id="outlined-basic" label="Land Mark" variant="outlined" /></Box></div></div>

</div></div>


<div className='w-[50%]'>
<div className='font-bold text-[18px]'>Preferences</div>
         <div className='flex flex-col gap-3 pt-4'>
                <div className='flex items-center Mobile-Text-Resposiveness'>
              <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>News Letter:</div>
              <div className='font-bold text-[15px]'>joined</div></div>

              <div className='flex items-center Mobile-Text-Resposiveness'>
               <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Products Categories:</div>
               <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange}  name='ProductCategory' value={profileitems.ProductCategory}  sx={{}} id="outlined-basic" label="Categories" variant="outlined" /></Box></div></div>


               <div className='flex items-center Mobile-Text-Resposiveness'> <div className='font-bold text-gray-400 w-[35%]'>Dark Mode:</div>
               <div className='font-bold text-[15px]  Mobile-labelTextboxes'>Not-Activated</div> </div> 
               
               
               <div className='flex items-center Mobile-Text-Resposiveness' >
                <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Language Content</div>
                  <div className=''>

              <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField name='Language' value={profileitems.Language}   sx={{}} id="outlined-basic" label="Language" variant="outlined" /></Box></div></div>

                  <div className='flex items-center Mobile-Text-Resposiveness'>
                  <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Currency</div>
                   <div className='font-bold text-[15px]'> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='Currency' value={profileitems.Currency}    sx={{}} id="outlined-basic" label="Currency" variant="outlined" /></Box></div>
                   </div>
                           <div className='flex items-center Mobile-Text-Resposiveness'>
                            <div className='font-bold text-gray-400 w-[35%] Mobile-labelTextboxes'>Region / Country</div>
                            <div className='font-bold text-[15px]  '> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='Reigion' value={profileitems.Reigion}    sx={{}} id="outlined-basic" label="Region" variant="outlined" /></Box></div></div>

</div>
     
            </div>

       
           </div>
           <div className='bg-white mt-2 rounded-d shadow-md Profile-Personal-Details Gap-Profile1  Mobile-PartTwo'>
<div  className='font-bold text-[18px] flex flex-wrap '>Social Media</div>
<div className='font-bold text-[18px] flex flex-wrap pt-5 gap-2]'>
   <div className='flex flex-col gap-3 pt-4'>
                <div className='flex items-center Mobile-Text-Resposiveness '>
              <div className='font-bold text-gray-400 w-[35%] Mobile-labelTextboxes'>Facebook:</div>
              <div className='font-bold text-[15px] flex items-center gap-2'>
               
                    
                    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange}  name='Facebook' value={profileitems.Facebook}  sx={{}} id="outlined-basic" label="Facebook" variant="outlined" /></Box></div></div></div>

   <div className='flex flex-col gap-3 pt-4'>
                <div className='flex items-center Mobile-Text-Resposiveness '>
              <div className='font-bold text-gray-400 w-[35%]  Mobile-labelTextboxes'>Linkedin:</div>
              <div className='font-bold text-[15px] flex items-center gap-2'>
               
                    
                    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange}  name='Linkedin' value={profileitems.Linkedin} sx={{}} id="outlined-basic" label="Linkedin" variant="outlined" /></Box></div></div></div>

   <div className='flex flex-col gap-3 pt-4'>
                <div className='flex items-center Mobile-Text-Resposiveness'>
              <div className='font-bold text-gray-400 w-[35%] Mobile-labelTextboxes'>Instagram:</div>
              <div className='font-bold text-[15px] flex items-center gap-2'>
               
                    
                    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='Instagram' value={profileitems.Instagram}   sx={{}} id="outlined-basic" label="Instagram" variant="outlined" /></Box></div></div></div>

   <div className='flex flex-col gap-3 pt-4'>
                <div className='flex items-center Mobile-Text-Resposiveness'>
              <div className='font-bold text-gray-400 w-[35%] Mobile-labelTextboxes'>Youtube:</div>
              <div className='font-bold text-[15px] flex items-center gap-2'>
               
                    
                    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch',  } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onchange} name='Youtube' value={profileitems.Youtube}  sx={{}} id="outlined-basic" label="Youtube" variant="outlined" /></Box></div></div></div>

</div>
<div className='flex gap-2 justify-end'>
<div className='flex justify-end pt-5'>   
  <Stack direction="row" spacing={2}>


           <Button variant='contained' color='success' sx={{
            backgroundColor:"black"
            ,width:"150px"
           }} className='font-bold h-[50px]'>Cancel

           </Button>

      
      </Stack>
      </div >


    <div className='flex justify-end pt-5'>   <Stack direction="row" spacing={2}>


           <Button variant='contained'  onClick={onsubmit} color='success' className='font-bold h-[50px]'>Save Chanages

            <Toaster toastOptions={{
            style:{
              borderRadius:"20px",
           

            }
           
            }} />

           </Button>

      
      </Stack>
      </div>

</div>



</div>

 
   
          
          

        </div>


          


        <Benefits/>
        <Footer/>








    </section>
  )
}

export default Profile
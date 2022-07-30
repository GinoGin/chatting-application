import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    
    const navigate = useNavigate()
    const[toggle,setToggle] = useState(true)
  const handleLog=()=>{
    localStorage.removeItem('auth')
    setToggle(false)
  }

  useEffect(()=>{
    if(!localStorage.getItem('auth')) {
      localStorage.removeItem('auth')
      navigate('/login')

    }
  },[toggle])

  return (
      <div className="row sticky-top">
          <div className=' bg-light px-3  text-end'>
            <button className='btn btn-success ' onClick={handleLog} >logout</button>
            </div>
       </div>
  )
} 

export default Header

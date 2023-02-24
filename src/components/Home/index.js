import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        gvgvgtfvgvgtg
        <button className='btn btn-info' onClick={()=>{
            navigate('/login')
        }}>Goto Login Page</button>
    </div>
  )
}

export default Home
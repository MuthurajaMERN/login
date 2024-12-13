import React from 'react'
import {useNavigate } from 'react-router-dom'

function Header() {

  const navigate=useNavigate()
  return (
    <div className='bg-secondary p-3'>
        <h3>Raja Academy</h3>
        <div className='row jusity-content-center pt-2 pb-1'>
            <div className='col-sm-12 col-md-7  col-lg-6 col-xl-5 d-flex'>
                <button className='btn btn-success me-4'onClick={()=>navigate('/')}>Home</button>

                <input className='from-control' type="search" placeholder="Search...."/>
                
                <button className='btn btn-success ms-4'>Home</button>
            </div>

        </div>


    </div>
  )
}

export default Header
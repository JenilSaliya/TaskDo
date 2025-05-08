import { useNavigate } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
import React from 'react'

const Navbar = () => {

  const navigate = useNavigate()

  return (

    <div className='w-screen h-16 bg-emerald-500 flex justify-between px-10 items-center sticky top-0'>

      <div className='flex justify-center items-center'>

        <img src={logo} alt="" className='h-[30px]' />
        <div className='font-bold text-3xl mx-2'>TaskDo</div>

      </div>

      <button className='font-bold hover:bg-emerald-800 cursor-pointer bg-emerald-900 py-1 px-4 rounded-lg shadow-xl/20' onClick={() => navigate('/login')}>login</button>

    </div>

  )

}

export default Navbar

import React, { useEffect, useState, useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

// Third party libraries
import { Icon } from '@iconify/react';

import { client } from '../client'
// Components
import Pins from './Pins'
import Sidebar from '../Components/Sidebar'
import UserProfile from '../Components/UserProfile'

// Custom hooks
import { useToggle } from '../hooks/useToggle'

// Assets
import logo from '../assets/sharelifelogo.png'


const Home = () => {

  const {state, toggle} = useToggle()

  const userFromLocalStorage = localStorage.getItem('user')
  const userInfo = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : localStorage.clear

  return (
    <div className='flex bg-gray-50 md:flex-row h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar />
      </div>
      <div className='flex flex-row md:hidden'>
      <Icon 
        icon="material-symbols:menu"
        className='text-4xl cursor-pointer'
        onClick={toggle} />
        <Link to="/">
          <img src={logo} alt="share-life-logo" className='w-28' />
        </Link>

      </div>
    </div>
  )
}

export default Home
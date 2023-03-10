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
//utils
import { userQuery } from '../utils/data'
// Assets
import logo from '../assets/sharelifelogo.png'
import { HtmlAttributes } from 'csstype';

type User = {
  image: string
  username: string
  _createdAt:  string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}


const Home = () => {

  const [user, setUser] = useState<User | null>(null)
  const {state: isVisisble, toggle} = useToggle()

  const scrollRef = useRef<HTMLDivElement>(null)

  const userFromLocalStorage = localStorage.getItem('user')
  const userInfo = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : localStorage.clear

  useEffect(() => {
    const query = userQuery(userInfo?.name)
    console.log(userInfo)
  
    client.fetch<User>(query).then((data) => {
      setUser(data)
      console.log("user: ", user); 
    }).catch((error) => {
      console.log("error:", error)
    })
  }, [])

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current?.scrollTo(0,0)
    }  
  }, [])

  return (
    <div className='flex bg-gray-50 md:flex-row h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user && user} />
      </div>
      <div className='flex flex-row md:hidden'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md '>
      <Icon 
        icon="material-symbols:menu"
        className='text-4xl cursor-pointer'
        onClick={toggle} />
        <Link to="/">
          <img src={logo} alt="share-life-logo" className='w-28' />
        </Link>
        <Link to={`/profile/${user?._id}`}>
          <img src={user?.image} alt="user-image" className='w-28' />
          <p>{ `name ${user?.username}`}</p>
        </Link>
        </div>
      {
        isVisisble && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end items-center p-2'>
            <Icon icon="ion:close-circle" onClick={toggle} className='w-8 h-8' />
            </div> 
            <Sidebar user={user && user} closeToggle={toggle} />
          </div>
        )
      }
      </div>
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
        <Routes>
          <Route path={`/profile/${user?._id}`} element={<UserProfile />}></Route>
          <Route path={`/*`} element={<Pins user={user && user } />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Home
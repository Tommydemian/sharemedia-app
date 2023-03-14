import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import Feed from '../Components/Feed'
import PinDetails from '../Components/PinDetails'
import CreatePin from '../Components/CreatePin'
import Search from '../Components/Search'


import { User } from '../types';

type PinsProps = {
  user: User
}

const Pins = ({user}: PinsProps) => {

  const [searchTerm, setSearchTerm] = useState('')



  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path={'/'} element={<Feed />}  />
          <Route path={'category/:categoryID'} element={<Feed/>}/>
          <Route path={'/pin-detail/:pinID'} element={<PinDetails user={user} />}  />
          <Route path={'/create-pin'} element={<CreatePin user={user} />}  />
          <Route path={'/search'} element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}  />
        </Routes>
      </div>
    </div>
  )
}

export default Pins
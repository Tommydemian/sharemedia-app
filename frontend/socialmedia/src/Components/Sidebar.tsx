import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { Icon } from '@iconify/react';

// Types
import { User } from '../types'
// Assets
import logo from '../assets/sharelifelogo.png'

type SidebarProps = {
  user: User
  closeToggle: () => void
}

const categories = [
  { id: 1, name: 'Animals' },
  { id: 2, name: 'Wallpapers' },
  { id: 3, name: 'Photography' },
  { id: 4, name: 'Gaming' },
  { id: 5, name: 'Coding' },
  { id: 6, name: 'Other' }
]

const Sidebar = ({ user, closeToggle }: SidebarProps) => {

  const handleCloseSideBar = () => {
    console.log('handleCloseSideBar');
  }

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 | hide-scrollbar '>
      <div className='flex flex-col'>
        <Link
          to='/'
          className='flex p-5 my-6 pt-1 w-190 items-center'
          onClick={closeToggle}
        >
          <img src={logo} alt="logo" className='w-full' />
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ?
                'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize'
                : 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
            }
            onClick={handleCloseSideBar}

          >
            <Icon icon="ic:round-home" className='w-6 h-6' />
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover categories</h3>
          {
            categories.slice(0, categories.length - 1).map(category => (
              <NavLink
                key={category.id}
                to={`category/${category.name}`}
                className={({ isActive }) =>
                  isActive ?
                    'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize'
                    : 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
                }
                onClick={handleCloseSideBar}
              >
                {category.name}
              </NavLink>
            ))
          }
        </div>
      </div>
      {user && (
        <Link to={`profile/${user._id}`}
        className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
        onClick={handleCloseSideBar}
        >
          <img src={user.image} alt="user-image" className='w-10 h10 rounded-full' />
          <p>{user.username}</p>
        </Link>
      )}
    </div>
  )
}

export default Sidebar
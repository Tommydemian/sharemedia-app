// import React from 'react'
// import { Link } from 'react-router-dom'

// import { Icon } from '@iconify/react';

// import { useToggle } from '../hooks/useToggle'
// // Assets
// import logo from '../assets/sharelifelogo.png'

// type User = {
//     image: string
//     username: string
//     _createdAt:  string
//     _id: string
//     _rev: string
//     _type: string
//     _updatedAt: string
//   }

// type mobileNavBarProps = {
//  user: User | null
// }

// const MobileNavbar = ({ user }:  mobileNavBarProps) => {

//     const { toggle } = useToggle()

//   return (
//     <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
//     <Icon 
//           icon="material-symbols:menu"
//           className='text-4xl cursor-pointer'
//           onClick={toggle} />
      
//       <Link to="/">
//         <img src={logo} alt="logo" className="w-28" />
//       </Link>
//       <Link to={`user-profile/${user?._id}`}>
//         <img src={user?.image} alt="user-pic" className="w-14 h-14 rounded-full " />
//       </Link>
//     </div>
//   )
// }

// export default MobileNavbar
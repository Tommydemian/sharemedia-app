import React from 'react'

type NavbarProps ={
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Navbar = ({searchTerm, setSearchTerm}: NavbarProps) => {
  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar
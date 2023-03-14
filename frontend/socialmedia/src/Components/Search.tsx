import React from 'react'

type SearchProps ={
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <div>Search</div>
  )
}

export default Search
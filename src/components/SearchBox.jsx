/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
// import style from './SearchBox.css'

function SearchBox(props) {
    // const [formData, setFormData] = useState ({searchTerm: " "})
    const [setPageNumber, searchTerm, setSeachTerm] = useState("")

    const onChange = (e) => {
        setSeachTerm({
            ...searchTerm,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // eslint-disable-next-line react/prop-types
        props.charactersSearch(searchTerm.searchTerm)
    }

  return (
   <>
   <div className='search'>
    {/* Find Character */}
    <form onSubmit={handleSubmit}>
         
         <input 
            type='text'
            name='searchTerm'
            placeholder='Search for a character'
            // onChange={handleChange}
            onChange={(e) => {
              setPageNumber(1)
              setPageNumber(e.target.value)
            }}
            value={searchTerm.searchTerm}
         
         />
         <button onClick={(e)=>{
          e.preventDefault()
        }} 
        className="btn btn-primary">Submit</button>
         {/* <input className='sumbit' type='submit' value='submit'/> */}
         
    </form>
    </div>
    </>
  )
}

export default SearchBox
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
// import style from './SearchBox.css'

function SearchBox(props) {
    const [formData, setFormData] = useState ({searchTerm: " "})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.charactersSearch(formData.searchTerm)
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
            onChange={handleChange}
            value={formData.searchTerm}
         />
         
         <button className="btn btn-primary">Submit</button>
         {/* <input className='sumbit' type='submit' value='submit'/> */}
         
    </form>
    </div>
    </>
  )
}

export default SearchBox
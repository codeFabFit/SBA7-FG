import React from 'react'
import { useState, useEffect, useRef } from 'react'

function SearchBox(getCharacter) {
    const [formData, setFormData] = useState ({searchTerm: ''})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getCharacter.charactersSearch(formData.searchTerm)
    }

  return (
   <>
   
    <form onSubmit={handleSubmit}>
         <div>Find Character
         <input 
            type='text'
            name='searchTerm'
            onChange={handleChange}
            value={formData.searchTerm}
         />
         <input type="submit" value='submit'/>
         </div>
    </form>
    
    </>
  )
}

export default SearchBox
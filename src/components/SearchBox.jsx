import React from 'react'
import { useState } from 'react'

function SearchBox(props) {
    const [formData, setFormData] = useState ({searchTerm: ''})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.charactersSearch(formData.searchTerm)
    }

  return (
   <>
   <div>Find Character
    <form onSubmit={handleSubmit}>
         
         <input 
            type='text'
            name='searchTerm'
            onChange={handleChange}
            value={formData.searchTerm}
         />
         <input type="submit" value='submit'/>
         
    </form>
    </div>
    </>
  )
}

export default SearchBox
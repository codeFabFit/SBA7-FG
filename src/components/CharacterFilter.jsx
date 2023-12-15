import React from 'react'
import { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'


function CharacterFilter() {
    const [CharacterFilter, getCharacterFilter] = useState([])
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            console.log('hello', response.data.results)
            getCharacterFilter(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <>
    {CharacterFilter((name, id)=>{
        return <CharacterCard  key={id}
        characters = {name}
        location ={location} 
        gender ={gender}
        image ={image} />
         
        
       
    }
    )}
    </>
  )
}

export default CharacterFilter
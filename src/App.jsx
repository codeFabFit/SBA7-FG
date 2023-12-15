import { useState, useEffect } from 'react'
import Header from './components/Header'
import { getCharacters } from 'rickmortyapi'
import SearchBox from './components/SearchBox'
import CharacterDisplay from './components/CharacterDisplay'

function App() {
  const [characters, setCharacter] = useState(null)
  const getCharacter = async (searchTerm) => {
    const response = await fetch (`https://rickandmortyapi.com/api/character?name=${searchTerm}`);
  const data = await response.json()
  // getCharacter(data)
  // console.log(character)
  setCharacter(data.results)
  console.log(data.results)
} 
useEffect (() => {
  getCharacter()
}, [])

  return (
    <>
    <Header />
      <h1>Rick and Morty Universe</h1>
      <SearchBox  charactersSearch ={getCharacter}/>
      <h1>The Charcater you search for is ...</h1>
      <CharacterDisplay getCharacter={characters}/>
    </>
  )
}


export default App

// eslint-disable-next-line no-unused-vars
import { react, useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Header from './components/Header'
// import { getCharacter } from 'rickmortyapi'
import SearchBox from './components/SearchBox'
import CharacterDisplay from './components/CharacterDisplay'
import CharacterCard from './components/CharacterCard'




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
      <h1 className='title'>Rick and Morty Universe</h1>
      
      <container className="container">
      <div className="col-8">The Characters
      <div className="row"> 
      <CharacterCard />
      <SearchBox  charactersSearch ={getCharacter}/>


        {/* <div className="col">Cards</div>
        <div className="col">Cards</div>
        <div className="col">Cards</div>
        <div className="col">Cards</div> */}

      </div>
      </div>
      </container>
      <br />
      <br />
      <h1>The Charcater you search for is ...</h1>
      <CharacterDisplay getCharacter={characters}/>
      
      <br />
      <br />
      <CharacterCard characters={CharacterCard} />
    </>
  )
}


export default App

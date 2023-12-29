// eslint-disable-next-line no-unused-vars
import { react, useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Header from './components/Header'
// import { getCharacter } from 'rickmortyapi'
import SearchBox from './components/SearchBox'
import CharacterDisplay from './components/CharacterDisplay'
import CharacterCard from './components/CharacterCard'
import Pages from './components/Pages'




function App() {
  const [characters, setCharacter] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  console.log(pageNumber)
  const getCharacter = async () => { 
    //  (`https://rickandmortyapi.com/api/character?name`);
   const response = await fetch `https://rickandmortyapi.com/api/character/?page=1`
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
      
      <section className="container">
      <div className="col-8">The Characters
      <div className="row"> 
      <br />
      <br />
      <SearchBox  charactersSearch ={getCharacter}/>
      <br />
      <br />

        {/* <div className="col">Cards</div>
        <div className="col">Cards</div>
        <div className="col">Cards</div>
        <div className="col">Cards</div> */}
      </div>
      </div>
      </section>
      
      <br />
      <br />
      <CharacterDisplay getCharacter={characters}/>
      <CharacterCard characters={CharacterCard}/>
      <Pages pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      <br />
      <br />
      {/* <CharacterCard  /> */}
      
    </>
  )
}


export default App

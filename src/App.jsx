/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import { react, useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Header from './components/Header'
// import { getCharacter } from 'rickmortyapi'
import SearchBox from './components/SearchBox'
import CharacterDisplay from './components/CharacterDisplay'
// import CharacterCard from './components/CharacterCard'
// eslint-disable-next-line no-unused-vars
import ReactPaginate from 'react-paginate'
import Paginate from './components/Paginate'
import NavBar from './components/NavBar'



function App() {
  const [, setCharacter ] = useState(null)
  const [searchTerm, setSeachTerm] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, updatedFetchedData] = useState([])
  const [info, results] = fetchedData
  
  console.log(pageNumber)
  console.log(searchTerm)
  
useEffect (() => {
const getCharacter = async () => { 
    //  (`https://rickandmortyapi.com/api/character?name=${searchTerm}&page=${pageNumber}`);
   const response = await fetch (`https://rickandmortyapi.com/api/character?name=${searchTerm}&page=${pageNumber}`);
  //  `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchTerm}`
  const data = await response.json()

  // getCharacter(data)
  // console.log(character)
  setCharacter(data.results)
  console.log(data.results)
} 
  getCharacter(results)
}, [fetchedData])

  return (
    <>
    <NavBar />
    <Header />
      <h1 className='title'>Rick and Morty Universe</h1>
      
      <section className="container">
      <div className="col-8">The Characters
      <div className="row"> 
      <br />
      <br />
      <SearchBox 
      setPageNumber={setPageNumber} 
      searchTerm={setSeachTerm} 
      updatedFetchedData={updatedFetchedData}
      />
      <br />
      <br />
      </div>
      </div>
      </section>
      
      <br />
      <br />
     
      {/* <CharacterCard characters={CharacterCard}/> */}
      <Paginate 
      info ={info}
      pageNumber={pageNumber} 
      setPageNumber={setPageNumber}/>


      {/* <CharacterDisplay getCharacter={characters}/> */}
      <CharacterDisplay 
      characters= {setCharacter} 
      />
      <br />
      <br />
      {/* <CharacterCard  /> */}
      
    </>
  )
}


export default App


  {/* <div className="col">Cards</div>
        <div className="col">Cards</div>
        <div className="col">Cards</div>
        <div className="col">Cards</div> */}
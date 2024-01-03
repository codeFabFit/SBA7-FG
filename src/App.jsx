/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import { react, useState, useEffect } from 'react'
import axios from 'axios'
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
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from './components/Episodes'
import Location from './components/Location'
import CharDetails from './components/CharDetails'
import './app.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
      </div>
      {/* Routes of each path */}
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/:id' element={<CharDetails/>} />

  <Route path='/episodes' element={<Episodes/>} />
  <Route path='/episodes/:id' element={<CharDetails/>} />

  <Route path='/location' element={<Location/>} />
  <Route path='/location/:id' element={<CharDetails/>} />
 

</Routes>
    </Router>
  )
}

const Home = () => {
  const [, setCharacter ] = useState(null)
  const [searchTerm, setSeachTerm] = useState("")
  // const [formData, setFormData] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, updatedFetchedData] = useState([])
  const [info, results] = fetchedData
  
  console.log(pageNumber)
  console.log(searchTerm)

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log('presenting',response.data.results);
        setCharacter(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [axios]);
  
// useEffect (() => {
// const getCharacter = async () => { 
//     //  (`https://rickandmortyapi.com/api/character?name=${searchTerm}&page=${pageNumber}`);
//    const response = await fetch (`https://rickandmortyapi.com/api/character?name=${searchTerm}&page=${pageNumber}`);
//   //  `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchTerm}`
//   const data = await response.json(character)

//   // getCharacter(data)
//   // console.log(character)
//   setCharacter(data.results)
//   console.log(data.results)
// } 

//   getCharacter(results)
// }, [])

  return (
    <>
    <Header />
      <h2 className='title'>*Belch*</h2>
      
      {/* <section className="container"> */}
      {/* <div className="col-8">The Characters
      <div className="row">  */}
      <br />
      
      <SearchBox 
      setPageNumber={setPageNumber} 
      searchTerm={setSeachTerm} 
      fetchedData={updatedFetchedData}
      />
      <br />
      <br />
      {/* </div>
      </div> */}
      {/* </section> */}

      <h1 className="text-center">The Characters</h1>
      <CharacterDisplay 
      // formData={setFormData}
      
      results={results}
      setCharacters= {setCharacter} 
      page="/"/>
      <br />
      <br />
     
     
      <Paginate 
      info ={info}
      pageNumber={pageNumber} 
      setPageNumber={setPageNumber}/>


     
      
      
      <br />
      <br />

      
    </>
  )
}


export default App

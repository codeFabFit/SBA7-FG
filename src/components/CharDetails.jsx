// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState} from 'react'

const CharDetails = () => {
let {id} = useParams()
const [fetchedData, ] = useState([])
let {name, image, type, location, species} = fetchedData

console.log(fetchedData)
 // individual cards for each character when clicked 

  useEffect (() => {
    const getCharacter = async () => { 
        //  (`https://rickandmortyapi.com/api/character?name=${searchTerm}&page=${pageNumber}`);
       const response = await fetch (`https://rickandmortyapi.com/api/character${id}`)
      //  `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchTerm}`
      const data = await response.json()
    
      // getCharacter(data)
      // console.log(character)
      getCharacter(data.results)
      console.log(data.results)
    } 
    
      getCharacter()
    }, [id])



    
  return (
    <div className='container d-flex justify-content'>
      <div className='d-flex flex column gap-3'>
      Details of : {id}
      <h1 className="name">{name}</h1>
      <img src={image} alt="" className='img-fluid'></img>
      <span>Type : {type === ""? "unknown": type }</span>
      <span>Location : {location?.name}</span>
      <span>Species: {species?.name}</span>

    </div>
    </div>
  )
}

export default CharDetails

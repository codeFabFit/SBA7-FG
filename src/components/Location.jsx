/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import CharacterDisplay from './CharacterDisplay'
import InputGroup from './Filter/InputGroup'

const Location = () => {

    let [id, setID] = useState(1)
    let [info, setInfo] = useState([])
    let [results, setResults] = useState([])
    let {name, type, dimension} = info;
    console.log(info)
    let api = `https://rickandmortyapi.com/api/location/${id}`

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then((res)=>res.json())
            console.log(data)
            setInfo(data)

            let c = await Promise.all(
                data.residents.map((c) => {
                    return fetch(c).then((res) => res.json())

                    // const res = await fetch(x)
                    // return await res.json(())
                })
            );
            setResults(c)
        })()
    },[api])

  return (
    <div className='container'>
        <div className='row mb-4'> 
      <h1 className='text-center mb-4'>Looking for a specific Location</h1>
      <br>
      </br>
      <h1 className='text-center'>Location: {name} </h1>
        <h4 className='text-center'> {dimension}</h4>


        <div className="row">
            <div className="col-3">
                <div className='text-center mb-4'>

                   Need to go somewhere specific
                    <InputGroup 
                    setID={setID}
                    name="Location"
                    total ={126}/>
                </div>
                </div>
        </div>
        <div className="col-8">
        <div className='row'>
            <CharacterDisplay results={results}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Location

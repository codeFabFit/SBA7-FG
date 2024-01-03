/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import CharacterDisplay from './CharacterDisplay'
import InputGroup from './Filter/InputGroup'

const Episodes = () => {

    let [id, setID] = useState(1)
    let [info, setInfo] = useState([])
    let [results, setResults] = useState([])
    let {air_date, name} = info;
    console.log(info)
    let api = `https://rickandmortyapi.com/api/episode/${id}`

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then((res)=>res.json())
            console.log(data)
            setInfo(data)

            let c = await Promise.all(
                data.characters.map((c) => {
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
      <h2 className='text-center'>Looking for a specific episode</h2>
      <br>
      </br>
      <h1 className='text-center'>Episode: {name} </h1>
        <h4 className='text-center'>Air Date {air_date}</h4>


        <div className="row">
            <div className="col-3">
                <div className='text-center mb-4'>

                    Episode Log
                    <InputGroup 
                    setID={setID}
                    name="Episode"
                    total ={51}/>
                </div>
                </div>
        </div>
        <div className="col-8">
        <div className='row'>
            <CharacterDisplay page="/episodes/" results={results}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Episodes

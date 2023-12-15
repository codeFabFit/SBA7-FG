/* eslint-disable no-unused-vars */
import React from "react";

export default function CharacterDisplay({ props }) {
    const loaded = () => {
        return ( 
             <>
              <container className = "characterList">
                    <h1>{props.character.name}</h1> 
                    <h2>{props.character.gender}</h2>
                    <img src={props.character.image} alt={props.character.name} />
                    <h3>{props.character.episode}</h3>
                    <h3>{props.character.species}</h3>
                </container> 
             </>
                )
                        }
  const loading = () => {
    return <h1>Your results</h1>
  }
  return props ? loaded() : loading();
}


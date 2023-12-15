import React from "react";


export default function CharacterDisplay({ character }) {
    const loaded = () => {
        return ( 
             <>
              <container className = "characterList">
                    <h1>{props.character.name}</h1> 
                    <h2>{character.gender}</h2>
                    <img src={character.image} alt={character.name} />
                    <h3>{character.episode}</h3>
                    <h3>{character.species}</h3>
                </container> 
             </>
                )
                        }
  const loading = () => {
    return <h1>Your results</h1>
  }
  return character ? loaded() : loading();
}


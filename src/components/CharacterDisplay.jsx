/* eslint-disable no-unused-vars */


import React from 'react'
import { Link } from 'react-router-dom';

// const CharacterDisplay = ({ results }) => {
//     let display;
//     console.log(results)


//     if (results){
//         display = results.map?((x) => {
//             let {id, name, image, location} = x
//             return ( 
//             <div key={id} 
//             className='col-4'>
//                 <div className="">
//                     <img src={image} alt="" className="img-fluid" />
//                     <div className="content">
//                         <div className="fs-4 fw-bold mb-4">{name}</div>
//                         <div className="">
//                             <div className="fs-6">Last Location</div>
//                             <div className="">{location.name}</div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 )
//         })
//     } else {
//         display = "No characters of that name"
//     }

//     return <>{display}</>;
// }






function CharacterDisplay({ props, page }) {
   {
    let display = props
    // console.log(results);

    if(props) {
        display = props.map((x) =>{
            let {id, name, image, gender, status, location, origin} = x;
            return (
                
                <Link 
                to ={`${page}${id}`} 
                key ={id} 
                className ="col-4 postion-relative">
                    <div className=''>
                        <img src={image} alt=" "className='img-fluid'/>
                        <div className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="content">
                                <div className="fs-4">{gender}</div>
                                <div className="fs-6">{origin.species}</div>
                                <div className="fs-4">{status}</div>
                                <div className="fs-6">{location.name}</div>
                                

                                </div>
                            </div>
                        </div>
                        <div className=" position-absolute badge bg-danger">{status}</div>
                    </Link>
            )
        })
    }
}
    const loading = () => {
        return ( 
             <>
             <h1>The character your looking for is ...</h1>
              {/* <container className = "characterList"> */}
                
                    <h1>{props.character.name}</h1> 
                    <h2>{props.character.gender}</h2>
                    <img src={props.character.image} alt={props.character.name} />
                    <h3>{props.character.episode}</h3>
                    <h3>{props.character.species}</h3>
                    
                {/* </container>  */}
             </>
                )

                        }
  const loaded = () => {
    return <>{props}</> 
  }
  return props ? loading() : loaded();
}

export default CharacterDisplay
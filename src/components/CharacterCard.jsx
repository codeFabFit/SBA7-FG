import React from 'react'

const CharacterCard = ({results})=> {
    let display
    console.log(results);

    if(results) {
        display = results.map((x) =>{
            let {id, name, image, gender, status, location} = x;
            return (
                <div key ={id} className="col-4">
                    <div className=''>
                        <img src={image} alt=" "className='img-fluid'/>
                        <div className="content">
                            <div className="fs-4">{name}</div>
                            <div className="content">
                                <div className="fs-4">{gender}</div>
                                <div className="fs-4">{status}</div>
                                <div className="fs-6">{location}</div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })
    }
}

// function CharacterCard(props) {
//   return (
//     <>
//     {display}
//     <h1>{props.name} </h1>
//     <h1>{props.gender} </h1>
//     <img src = {props.image} alt = {props.name}/>
//     <h1>{props.location} </h1>
//     <h1>{props.status} </h1>
//     <h1>{props.origin} </h1>

//     </>
//   )
// }

export default CharacterCard
/* eslint-disable no-unused-vars */


import React from 'react'
import { Link } from 'react-router-dom';
import Episodes from './Episodes';
// import Characters from './Characters';

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







//    {
//     let display = props
//     // console.log(results);

//     if(props) {
//         display = props.map((x) =>{
//             let {id, name, image, gender, status, location, origin} = x;
//             return (
                
//                 <Link 
//                 to ={`${page}${id}`} 
//                 key ={id} 
//                 className ="col-4 postion-relative">
//                     <div className=''>
//                         <img src={image} alt=" "className='img-fluid'/>
//                         <div className="content">
//                             <div className="fs-4 fw-bold mb-4">{name}</div>
//                             <div className="content">
//                                 <div className="fs-4">{gender}</div>
//                                 <div className="fs-6">{origin.species}</div>
//                                 <div className="fs-4">{status}</div>
//                                 <div className="fs-6">{location.name}</div>
                                

//                                 </div>
//                             </div>
//                         </div>
//                         <div className=" position-absolute badge bg-danger">{status}</div>
//                     </Link>
//             )
//         })
//     }
// }
function CharacterDisplay({ props, page }) {
    const loading = () => {
       props.map((x) =>{
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

        return ( 
             <>
            <section className="character-list">
         {Episodes.map((chars, id) => {
        return <Episodes key={id} chars={chars} />;
      })}
    </section>
             </>
                )

                        }
//   const loaded = () => {
//     return <>
//     {props}
//     </> 
//   }
//   return props ? loading() : loaded();
}

export default CharacterDisplay
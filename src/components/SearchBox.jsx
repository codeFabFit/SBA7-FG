/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { getCharacter } from 'rickmortyapi'
import { ReactPropTypes } from 'react'
// import style from './SearchBox.css'


function SearchBox() {
  const [formData, setFormData] = useState ({searchTerm: ''})
  // let getCharacter

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value})
  
console.log(e.target.value)
}

  const handleSubmit = (e) => {
      e.preventDefault();

      // eslint-disable-next-line react/prop-types
      // getCharacter(formData.searchTerm)

      // const charactersResult =
      // getCharacter.props(formData.searchTerm)
      // console.log(charactersResult)
  }

return (
 <>
 <div>
  <form onSubmit={handleSubmit}>
       
       <input  className='search'
          type='text'
          placeholder='Search for character' 
          name='searchTerm'
          onChange={handleChange}
          value={formData.searchTerm}
       />
       <input className='btn btn-primary fs-5' type="submit" value='submit'/>
       
  </form>
  </div>
  </>
)
}

export default SearchBox





// const SearchBox = ({ setSearchTerm, setPageNumber }) => {
//   return (
//     <>
//     <form className='d-flex justify-content-center'>
//       <input 
//       onChange={(e) => {
//         setPageNumber(1)
//         setSearchTerm(e.target.value)
//       }}
//       placeholder='Search for character' 
//       type="text" 
//       className={style.input}>
//       </input>
//       <button className='btn btn-primary fs-5'>Search</button>
//     </form>
//     </>
//   )
// }



// function SearchBox(props) {
//     // const [formData, setFormData] = useState ({searchTerm: " "})
//     const [setPageNumber, searchTerm, setSeachTerm] = useState("")

//     const onChange = (e) => {
//         setSeachTerm({
//             ...searchTerm,
//             [e.target.name]: e.target.value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // eslint-disable-next-line react/prop-types
//         props.charactersSearch(searchTerm.searchTerm)
//     }

//   return (
//    <>
//    <div className='search'>
//     {/* Find Character */}
//     <form>
         
//     <input 
//     onChange={(e) => {
//       e.preventDefault()
//     }}
//       placeholder='Search for character' 
//       type="text" 
//       className="input">
//       </input>
//       <button 
//       onClick={(e)=>{
//           e.preventDefault()
//         }} 
//         className='btn btn-primary fs-5'>Search</button>
     
//          {/* <input className='sumbit' type='submit' value='submit'/> */}
         
//     </form>
//     </div>
//     </>
//   )
// }
// export default SearchBox
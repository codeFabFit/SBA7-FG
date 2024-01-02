/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

 // this is to figure out specific location or episodes
const InputGroup = ({ total, name, setID }) => {
    
  return (
   
      <div className="input-group mb-3">
  <select 
  onChange={(e) => setID(e.target.value)}
  className="form-select" 
  id={name} >
    <option value ="1" selected >Select One ...</option>

    {[...Array(total).keys()].map((x)=>{
      return (
        //do not change anything from here
      <option 
      value = { x + 1 }
      >
        {name} - {x + 1}
         </option> 
         );
    })}
    
    {/* console.log(total) */}
  </select>

  {/* <button className="btn btn-outline-secondary" type="button">Button</button> */}
</div>
    // do not change anything above, drop downs are working fine for both location and epsiode
    // still struggling to get it the display of each character to show
  )
}

export default InputGroup

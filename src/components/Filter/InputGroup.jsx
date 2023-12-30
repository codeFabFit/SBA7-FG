/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'


const InputGroup = ({ total, name, setID }) => {
    
  return (
   
      <div className="input-group mb-3">
  <select 
  onChange={e=>setID(e.target.value)}
  className="form-select" 
  id={name} >
    <option >Options</option>

    {[...Array(total).keys()].map((x)=>{
      <option value={x+1}>
        {name} - {x+1}
         </option>
    })}
    
    console.log(total)
  </select>
  {/* <button className="btn btn-outline-secondary" type="button">Button</button> */}
</div>
    
  )
}

export default InputGroup

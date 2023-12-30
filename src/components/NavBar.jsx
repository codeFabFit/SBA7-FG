/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
   <Link to="/" className='navbar-brand'><code>Rick and Morty Universe</code></Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}

      <i className='fas-fa-bars open'>options</i>
      <i className='fas fa-times closed'></i>

    </button>
    <div 
    className="collapse navbar-collapse justify-content-end" 
    id="navbarNav">
      <div className="navbar-nav fs-5">
          <NavLink to="/" className="nav-link active" aria-current="page" >Characters</NavLink>
       
          <NavLink to="/episodes"className="nav-link">Episodes</NavLink>
        
          <NavLink to="/location"className="nav-link" >Location</NavLink>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar

// import React from 'react'

// eslint-disable-next-line react/prop-types
const Pages = ({ pageNumber, setPageNumber }) => {
  let Next = () => {
    setPageNumber((first) => first + 1)
  }
  let Previous = () => {
    if ( pageNumber === 1 ) return 
    setPageNumber((first) => first - 1)
  }

  return (
    <div className="container d-flex justify-content-center gap-5 my-10">
      <button onClick={Previous} className="btn btn-primary">Previous</button>
      <button onClick={Next} className="btn btn-primary">Next</button>

      
    </div>
  )
}

export default Pages

import React from 'react'
import ReactPaginate from 'react-paginate'

// eslint-disable-next-line react/prop-types
const Pages = ({ info, pageNumber, setPageNumber }) => {
  // let Next = () => {
  //   setPageNumber((first) => first + 1)
  // }
  // let Previous = () => {
  //   if ( pageNumber === 1 ) return 
  //   setPageNumber((first) => first - 1)
  // }


  // using react pagation instead of hard coding 
  return (
    <ReactPaginate 
    className='pagination justify-content-center' 
    nextLabel="next"
    previousLabel= "prev"
    nextClassName='btn btn-primary'
    previousClassName='btn btn-primary'

    pageCount ={info?.pages} />
  
    // <div className="container d-flex justify-content-center gap-5 my-10">
    //   <button onClick={Previous} className="btn btn-primary">Previous</button>
    //   <button onClick={Next} className="btn btn-primary">Next</button>

    // </div>
  )
}

export default Pages

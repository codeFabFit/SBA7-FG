/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactPaginate from 'react-paginate'

// eslint-disable-next-line react/prop-types
const PageNum = ({ info, pageNumber, setPageNumber }) => {
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
    forcePage={ pageNumber===1? 0 : pageNumber -1 }
    className='pagination justify-content-center gap-4 my-4' 
    nextLabel="next"
    previousLabel= "prev"
    nextClassName='btn btn-primary'
    previousClassName='btn btn-primary'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    // activeClassName='active'
    onPageChange={(data) => {
      setPageNumber(data.selected + 1)
    }}
    pageCount ={info?.pages} />
  
    // <div className="container d-flex justify-content-center gap-5 my-10">
    //   <button onClick={Previous} className="btn btn-primary">Previous</button>
    //   <button onClick={Next} className="btn btn-primary">Next</button>

    // </div>
  )
}

export default PageNum

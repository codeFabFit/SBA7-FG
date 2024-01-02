// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'

const CharDetails = () => {
    let {id} = useParams()
  return (
    <div>
      Details of : {id}
    </div>
  )
}

export default CharDetails

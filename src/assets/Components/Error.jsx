import React from 'react'
import error from '../images/error.avif'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='Error'>
      <div className="container">
      <Link className='error_link' to={'/'}>Back</Link>
        <div className="error_box">
         
        <img src={error} alt="404" />
        </div>
        
      </div>
    </div>
  )
}

export default Error
import React from 'react'
import { RotatingSquare } from  'react-loader-spinner'

export default function Loader() {
  return (
    <div className='loader'>
     <RotatingSquare
  height="100"
  width="100"
  color="#E5A043"
  ariaLabel="rotating-square-loading"
  strokeWidth="4"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

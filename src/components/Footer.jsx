import React from 'react'
import {
    BrowserRouter as Router,Link 
  } from "react-router-dom";
export default function Footer() {
  return (
    <section className='container'>
        <div className='footer'>
            <p>created by <a href='https://github.com/mohamed-benoughidene' target='_blank' className='highlight'>mohamed-benoughidene</a> © 2023. All rights reserved.</p>
        </div>
    </section>
  )
}

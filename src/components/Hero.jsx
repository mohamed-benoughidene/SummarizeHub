import React from 'react'
import heroImg from '../img/hero.svg'
export default function Hero() {
  return (
    <div className='container'>
        <section id='hero'>
            <img src={heroImg} alt="" className='hero-img'/>
           <div className='hero-text'>
            <h1>SummarizeHub: Unveiling Insights, Crafting Clarity - Your Gateway to Condensed Wisdom and Article Highlights!</h1>
            <button className='btn'>Start Now</button>
           </div>
        </section>
    </div>
  )
}

import React from 'react';
import AboutImg from '../img/about.svg';
export default function About() {
  return (
    <div className='container'>
        <section id='about'>
<img src={AboutImg} alt="" className='about-img'/>
<h1 className='about-text'>SummarizeHub: is a tool that uses AI to summarize online articles and normal text. </h1>
        </section>
    </div>
  )
}

import React from 'react';
import AboutImg from '../img/about.svg';
export default function About() {
  return (
    <div className='container'>
        <section id='about'>
<img src={AboutImg} alt="A robot working at a desk with a computer, diligently performing tasks." className='about-img'/>
<h1 className='about-text'>Using SummarizeHub is a breeze.  Simply input the text, article, or URL, choose your desired language for both input and output summaries, and let our intelligent algorithms do the rest. Within moments, you'll have a condensed version that retains the key points and main ideas.</h1>
        </section>
    </div>
  )
}

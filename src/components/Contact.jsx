import React from 'react'
import ContactImg from '../img/contact.svg'
export default function Contact() {

  return (
    <div className='container'>
      <section id='contact'>
<img src={ContactImg} alt="Three people in blue overalls standing together, possibly discussing a project or working collaboratively." className='contact-img'/>
<h1>Feel free to Contact Us</h1>
<form action="">
  <input type="text" placeholder='name'/>
  <input type="email" placeholder='email@'/>
  <textarea name="" id="" rows="10" placeholder='your message'></textarea>
  <button className='btn' type='submit'>Submit</button>

</form>
      </section>
    </div>
  )
}

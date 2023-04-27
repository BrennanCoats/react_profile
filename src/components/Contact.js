import React from 'react'
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className='contactSection'>
      <div className='contactContainer'>
        <header className='contactHeader'>Contact Me</header>
          <label>Name:</label> 
          <input id='nameBox' type = 'textarea'></input>
          <label>Email:</label> 
          <input id='emailBox' type = 'textarea'></input>
          <label>Message:</label> 
          <input id='messageBox' type = 'textarea'></input>
       </div>
    </div>
  )
}
import React from 'react'
import '../styles/Project.css';

export default function Projects() {
  return (
    <div className='projectContainer'>
  
      <card className='projectCard'>
        <header className='projectHeader' >Lovecraftian Pet App</header>
        <a href="https://tangerine-brioche-dd90ea.netlify.app/">Click Here to view the project</a>
      </card>
      <card className='projectCard'>
        <header className='projectHeader'>Tech Blog</header>
        <a href="https://brennancoats-tech-blog.herokuapp.com/">Click Here to view the project</a>
      </card>
      <card className='projectCard'>
        <header className='projectHeader'>Note Taker</header>
        <a href="https://brennancoats-notetaker.herokuapp.com/">Click Here to view the project</a>
      </card>
      <card className='projectCard'>
        <header className='projectHeader'>Personal Profile</header>
        <a href="https://brennancoats.github.io/personal_profile/">Click Here to view the project</a>
      </card>
      <card className='projectCard'>
        <header className='projectHeader'>Code Refactor</header>
        <a href="https://github.com/BrennanCoats/Challenge-1">Click Here to view the project</a>
      </card>
    </div>
  )
}
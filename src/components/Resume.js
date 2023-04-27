import React from 'react'
import '../styles/Resume.css';

export default function Resume() {
  return (
    <div className='resumeContainer'>
      <div>
      <text>Download My Resume <span>Here</span></text>
      </div>
      
      <card className='resumeCard'>
        <header className='resumeHeader'>Front End Proficiencies</header>
        <ul>
            <li>
                HTML
            </li>
            <li>
                CSS
            </li>
            <li>
                Javascript
            </li>
            <li>
                React
            </li>
        </ul>
      </card>
      
      <card className='resumeCard'>
        <header className='resumeHeader'>Back End Proficiencies</header>
        <ul>
            <li>
                Mysql
            </li>
            <li>
                Sequelize
            </li>
            <li>
                Mongodb
            </li>
        </ul>
      </card>
    </div>
  )
}

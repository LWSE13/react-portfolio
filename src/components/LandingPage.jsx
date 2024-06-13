import React from 'react';
import '../styles/LandingPage.css'

export default function LandingPage() {
  return (
    <div className="lp-container">

      <h1 className="title">Hello World</h1>
      <h3 className="subTitle">Welcome to my portfolio!</h3>
      <div className='dec-line'></div>
      <div className='btn-row'>
      <button className='btn' onClick={() => navigateTo('/about')}>About Me</button>
      <button className='btn' onClick={() => navigateTo('/portfolio')}>Portfolio</button>
      <button className='btn' onClick={() => navigateTo('/resume')}>Resume</button>
      <button className='btn' onClick={() => navigateTo('/contact')}>Contact Me</button>
      </div>
    </div>
  );
}
import React from 'react';
import '../styles/LandingPage.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="lp-container">

      <h1 className="title">Hello World</h1>
      <h3 className="subTitle">Welcome to my portfolio!</h3>
      <div className='dec-line'></div>
      <div className='btn-row'>
      <button className='btn' onClick={() => navigate('/about')}>About Me</button>
      <button className='btn' onClick={() => navigate('/portfolio')}>Portfolio</button>
      <button className='btn' onClick={() => navigate('/resume')}>Resume</button>
      {/*<button className='btn' onClick={() => navigate('/contact')}>Contact Me</button>*/}
      </div>
    </div>
  );
}
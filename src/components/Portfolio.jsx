import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/portfolio.css';

export default function Portfolio() {
    return (
      <>
        <div className="page-container">
          <Header />
          <div className="container">
            <h1 className='title2'>PORTFOLIO</h1>
            <div className="portfolio-container">
              {}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
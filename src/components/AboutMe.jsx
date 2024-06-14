import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/AboutMe.css';

export default function AboutMe() {
    return (
        <>
            <div className="page-container">
                <Header />
                <div className="about-container">
                    <h1 className="abt-title">ABOUT ME</h1>
                    <div className="about-content">
                        <div className="about-text">
                        
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function AboutMe() {
    return (
        <>
        <Header />
        <div className="about-container">
        <h1 className="abt-title">About Me</h1>
        <div className='dec-line'></div>
        <div className="about-content">
            <div className="about-text">
            <p>
                I am a full-stack software engineer with a passion for creating and building new things. I am a recent graduate of the Flatiron School's Software Engineering program and have experience working with Ruby on Rails, JavaScript, and React. I am excited to continue learning and growing as a developer and am eager to apply my skills to new projects and challenges.
            </p>
            <p>
                When I'm not coding, I enjoy playing video games, reading, and spending time with my family and friends. I am also a huge fan of music and love going to concerts and music festivals.
            </p>
            </div>
            <div className="about-img">
            <img src="https://i.imgur.com/5ZvXH5P.jpg" alt="profile" />
            </div>
        </div>
        </div>
        <Footer />
        </>
    );
}
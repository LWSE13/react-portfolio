import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/AboutMe.css';

export default function AboutMe() {
    return (
        <>
            <div className="page-container">
                <Header />
                <div className="container">
                    <h1 className="title2">ABOUT ME</h1>
                    <div className="about-content">
                        <div className="about-text">
                        <div className="text-container">
                            <div className='inner-txt-container'>
                                <div className='heading-center'>
                                    <h2>MY PAST</h2>
                                </div>
                                <p>I come from a small town called Dudley and started my career off in the world of engineering, specifically welding, and then electrical installation post covid. I wasn't very passionate about either of these and sought a new career change. I had always enjoyed ICT and was naturally pretty good at the subject as I had been a bit of a geek since I was young. Upon doing a bit of research I found out about programming and decided to do a few courses on LinkedIn Learning. I really enjoyed them, but I still lacked a sense of guidance and a mentor who could help me grow. That's when I decided to seek further education and enroll in a bootcamp for aspiring full stack developers</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <div className='inner-txt-container'>
                            <div className='heading-center'>
                                    <h2>MY PRESENT</h2>
                                </div>
                                <p>I am now at the end of my bootcamp and am certain that I made the right decision to move into this industry. I've had experience with the basics such as HTML, CSS and Javascript. and have worked my way up to learning about, and creating my own projects using Node, SQL databases and MERN stack. I'm extremely passionate and take so much pride in the work I do. I'll never get over the feeling you get upon finishing a large, ambitious project or fixing a nasty, persistent bug. In my spare time I like to play video games and get out to socialise with friends (it's important to touch grass after looking at these screens for so long). As far as hobbies go I enjoy working out and do some music production on the side. I also have an interest in art and wish I could draw for the life of me :(</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <div className='inner-txt-container'>
                                <h2>MY FUTURE</h2>
                                <p>In the future I would love to break into the industry and finally get my foot in the door. I want to continue expanding on my skills in my spare time, some languages that interest me are Python, Rust and c++. AI is also another technology that I would love to play around with.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
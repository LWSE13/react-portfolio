import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/resume.css";

export default function Resume() {
    return (
        <>
            <div className="page-container">
                <Header />
                <div className="container">

                    <h1 className='title2'>
                        RESUME
                    </h1>
                    <h4 className="cv-link">
                        Download a copy of <a href="cvpath/cv.pdf" download="YourCVName.pdf">my CV</a> (coming soon)
                    </h4>
                    <ul className="resume-skills">
                        <li>
                            <h2>EDUCATION</h2>
                            <p>Full Stack Development Bootcamp - University Of Birmingham</p>
                            <p>Electrical Installation - Dudley College</p>
                            <p>Welding - Dudley College</p>
                            <p>GCSEs - Holly Hall Academy</p>
                        </li>
                        <div className="line-container">
                            <div className="dec-line"></div>
                        </div>
                        <li>
                            <h2>EXPERIENCE</h2>
                            <p>Full Stack Developer - University Of Birmingham</p>
                        </li>
                        <div className="line-container">
                            <div className="dec-line"></div>
                        </div>
                        <li>
                            <h2>SKILLS</h2>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                            <p>Node</p>
                            <p>SQL Databases</p>
                            <p>MERN Stack</p>
                        </li>
                        <div className="line-container">
                            <div className="dec-line"></div>
                        </div>
                        <li>
                            <h2>INTERESTS</h2>
                            <p>Python</p>
                            <p>Rust</p>
                            <p>C++</p>
                            <p>AI</p>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    );
}
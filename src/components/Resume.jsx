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
                    <img className='ctd-img' src="images/c2d2.png" alt="Click To Download" />
                </div>
                <Footer />
            </div>
        </>
    );
}
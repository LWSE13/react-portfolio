import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/contactme.css";
import { SocialIcon } from "react-social-icons";

export default function ContactMe() {
  const [formFields, setFormFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleFocus = (field) => (event) => {
    const value = event.target.value;
    let error = '';

    if (!value) {
      error = `Please input a ${field} `;
    } else if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please input a valid email';
    }

    setErrors({ ...errors, [field]: error });
  };

  const formChange = (field) => (event) => {
    setFormFields({ ...formFields, [field]: event.target.value });
    if (errors[field]) {
      handleFocus(field)(event);
    }
  };

  return (
    <>
    <div className="page-container">
      <Header />
      <div className="container">
        <h1>Contact Me</h1>
        <div className="icon-container">
          <SocialIcon id="github" className="icon" url="https://github.com/LWSE13"></SocialIcon>
          <SocialIcon id="linkedIn" className="icon" url="https://www.linkedin.com/in/lee-wheeler-865818271/"></SocialIcon>
          <SocialIcon id="email" className="icon" network="email" href="mailto:leewheeler888@gmail.com"></SocialIcon>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/contactme.css";

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
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={formChange('name')}
              onBlur={handleFocus('name')}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formFields.email}
              onChange={formChange('email')}
              onBlur={handleFocus('email')}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formFields.message}
              onChange={formChange('message')}
              onBlur={handleFocus('message')}
            ></textarea>
            {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
    </>
  );
}
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer>
      <p className="Ftext">Copyright Lee Wheeler 2024 ©</p>
      <div className="icon-container">
        <a href="https://github.com/LWSE13" target="_blank" rel="noopener noreferrer">
          <SocialIcon id="github" className="icon" bgColor="#22292f" network="github"></SocialIcon>
        </a>
        <a href="https://www.linkedin.com/in/lee-wheeler-865818271/" target="_blank" rel="noopener noreferrer">
          <SocialIcon id="linkedIn" className="icon" bgColor="#22292f" network="linkedin"></SocialIcon>
        </a>
        <SocialIcon id="email" className="icon" bgColor="#22292f" network="email" href="mailto:leewheeler888@gmail.com"></SocialIcon>
      </div>
    </footer>
  );
}
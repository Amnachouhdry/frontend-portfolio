import React from 'react';
import './Style.css';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/Amn Chouhdry" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/amina-munir-182188253" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://api.whatsapp.com/send?phone=03093866659" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      <div className="footer-bottom">
        <p>&copy; Created by Amina Chouhdry 2023</p>
      </div>
    </footer>
  );
}

export default Footer;

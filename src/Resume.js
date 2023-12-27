import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import './Style.css';

const Resume = () => {
  const googleMapsUrl = 'https://www.google.com/maps?q=Lari+Aada,Daska';
  const linkedinUrl = 'https://www.linkedin.com/in/amina-munir-182188253'; 

  return (
    <div id="resume" className="resume-container">
      <div className='row'>
        <div className='col-right'>
          <h1>Res<span>ume</span></h1>
          <div className='right-box'></div>
          <div className='resume-name'>
            <h2>AMINA <br /> CHOUHDRY</h2>
            <p>FRONTEND WEB DEVELOPMMENT</p>
            </div>
        </div>
        <div className='col-left'>
          <div className='left-box'>
            <img src='resume.png' alt='img' />
          </div>
          <div className="contact-info">
            <h1>Contact Me</h1>
            <p>
              If you have any questions or would like to collaborate,<br /> please don't
              hesitate to contact me.
            </p>
            <p className='icon'>
              <FontAwesomeIcon icon={faPhone} />{' '}
              <a href="tel:03093866659">03093866659</a>
            </p>
            <p  className='icon'>
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              <a href="mailto:aminachouhdry@gmail.com">aminachouhdry@gmail.com</a>
            </p>
            <p  className='icon'>
              <FontAwesomeIcon icon={faMapMarker} />{' '}
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Lari Aada, Daska
              </a>
            </p>
            <p  className='icon'>
              <FontAwesomeIcon icon={faLinkedinIn} />{' '}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>
            <h3><span>Download</span> Resume</h3>
            <div className='down-btn'>
            <button>
                <a href="Amna's Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download
                </a>
            </button>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Resume;

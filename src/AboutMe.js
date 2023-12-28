import React, { useState, useEffect } from 'react';
import aboutMeImg from './images/aboutme.png';
import hireImg from './images/hire.png';
import { Link } from 'react-scroll';

function AboutMe() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const openLinkedInProfile = () => {
    // Replace 'YOUR_LINKEDIN_PROFILE_URL' with your actual LinkedIn profile URL
    const linkedinProfileUrl = 'https://www.linkedin.com/in/amina-munir-182188253';
    window.open(linkedinProfileUrl, '_blank');
  };

  return (
    <section id='about'>
      <div className="about-content">
        <span className='hello'>Hello, </span>
        <span className='about-text'>
          {showText && (
            <>
              I'm <span className='about-name'>Amina </span>
              <br />
              Website developer
            </>
          )}
        </span>
        <p className='about-para'>
          I am a skilled web developer with experience in creating <br />
          visually appealing and user-friendly Websites.
        </p>
        <button className='btn' onClick={openLinkedInProfile}>
          <img src={hireImg} alt='hire me' className='btn-img' /> Hire Me
        </button>
      </div>
      <img src={aboutMeImg} alt='about img' className='about-img' />
      <img src='05.png' alt='side img' className='about-side' />
    </section>
  );
}

export default AboutMe;

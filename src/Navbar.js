import React, { useState } from "react";
import './Style.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <div className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="navbar">
          <div>
            <img src="logo.png" alt="logo" className="logo" />
          </div>
          <button className="mobile-menu-toggler" onClick={handleToggleMenu}>
             <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={`desktop-menu ${mobileMenuOpen ? 'hidden' : ''}`}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktop-menu-list active"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktop-menu-list"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktop-menu-list"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktop-menu-list"
            >
              Projects
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="desktop-menu-list"
            >
              Resume
            </Link>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`mobile-menu-list ${mobileMenuOpen ? '' : 'hidden'}`}
            onClick={handleToggleMenu}
          >
            <button className="desktop-menu-btn">
              <img src="contact.jpg" alt="" className="desktop-menu-img" />
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Style.css';

function Projects() {
  const projects = [
    {
      title: 'React Calculator',
      description: 'Developed a full-fledged e-commerce website using React and Redux.',
      techStack: 'Basic HTML, CSS, & JavaScript knowledge Understanding of arithmetic operations',
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio website showcasing my skills and projects.',
      techStack: 'HTML, CSS, JavaScript, React',
    },
    {
      title: 'React Weather App',
      description: 'Youll also display real-time weather information for a users location, which is a great way to practice working with external data. To get this, you’ll use the browsers built-in Geolocation API.',
      techStack: 'Basic HTML, CSS, & JavaScript knowledge Basic API & JSON knowledge',
    },
    {
      title: 'Random Access Number Game',
      description: 'Youll also display real-time weather information for a users location, which is a great way to practice working with external data. To get this, you’ll use the browsers built-in Geolocation API.',
      techStack: 'Basic HTML, CSS,  JavaScript  & React',
    },
  ];

  return (
    <section id="projects">
    <div className='project-section'>
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Projects;


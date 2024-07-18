import React from 'react';
import ParticleSystem from './ParticleSystem';

// Define all variables at the top for easy adjustments
const BACKGROUND_COLOR = '#1c1c1c'; // Background color of the entire app
const HEADER_COLOR = 'black'; // Background color of the header
const LINK_COLOR = '#00ffcc'; // Color of the links - 3451234
const PROJECTS = [
  { name: 'Project 1', href: 'project1/index.html' },
  { name: 'Project 2', href: 'project2/index.html' },
]; // List of projects

function App() {
  console.log("App component is loaded");

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: BACKGROUND_COLOR }}>
      <div style={{ height: '50vh', backgroundColor: HEADER_COLOR }}>
        <ParticleSystem />
        <p>Debugging message: Header rendered</p>
      </div>
      <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {PROJECTS.map((project, index) => (
            <li key={index}>
              <a href={project.href} style={{ color: LINK_COLOR, textDecoration: 'none' }}>
                {project.name}
              </a>
              <p>Debugging message: Link {index + 1} rendered</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

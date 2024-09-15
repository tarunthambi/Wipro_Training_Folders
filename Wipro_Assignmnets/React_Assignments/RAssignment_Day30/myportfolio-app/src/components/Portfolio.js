import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Portfolio.css';
import weatherImage from './image/weather.jpeg';
import taskImage from './image/task.jpeg';


const Portfolio = () => {
  return (
      <div className="portfolio-container">
        <h2>My Projects</h2>
        <p>A showcase of my recent work and accomplishments.</p>
        <div className="project-grid">
          {/* Card 1 */}
          <Card style={{ width: '20rem' }} className="project-card">
            <Card.Img variant="top" src={weatherImage} alt="Project One Image" />
            <Card.Body>
              <Card.Title>React Weather App</Card.Title>
              <Card.Text>
              This project is a responsive weather application built with React. It utilizes the OpenWeatherMap API to fetch real-time weather data. 
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Card 2 */}
          <Card style={{ width: '20rem' }} className="project-card">
            <Card.Img variant="top" src={taskImage} alt="Project Two Image" />
            <Card.Body>
              <Card.Title>Task Manager Pro</Card.Title>
              <Card.Text>
              Task Manager Pro is a productivity web application designed to help users manage their daily tasks and to-do lists efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
};

export default Portfolio;

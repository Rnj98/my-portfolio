import React from "react";
import "./Projects.css";
import pic from "../../assets/landing-page.png";
import pic2 from "../../assets/paddle-pals.png";

function ProjectItem(props) {
  return (
    <div className="project-item">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.url} target="_blank" rel="noreferrer">
        Youtube Link
      </a>
      <img src={props.img} alt="project" />
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-list">
        <div className="inner-container">
          <ProjectItem
            title="Paddle Pals"
            description="I've developed a web app that enables users to store their preferred lake or kayaking locations in a database. To ensure security, I implemented JSON-based authentication requiring users to log in with an encrypted username and password using Json web tokens. The homepage of the website displays the saved spots, which can be easily added via the input form in the dedicated 'Add' section, and also deleted when needed."
            url="https://www.youtube.com/watch?v=GnWYMrnfLLg&t=15s&ab_channel=RyanJolley"
            img={pic2}
          />
        </div>
      </div>
      <div className="projects-list">
        <div className="inner-container">
          <ProjectItem
            title="Landing Page"
            description="I have created a landing page for my fiancé's wedding photography business. To make the page interactive and user-friendly, I implemented various functionalities using vanilla JavaScript, including a responsive navigation bar and a contact section that allows users to schedule a photo session by filling out a form. Additionally, I have incorporated a card component that dynamically displays the user's inputted data. The layout of the page was created using the latest HTML5 and CSS standards, ensuring that the final result is both visually stunning and functional."
            url="https://www.youtube.com/watch?v=zF6ZoO_HG2g&t=49s&ab_channel=RyanJolley"
            img={pic}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

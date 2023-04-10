import React from 'react';
import './Projects.css';
import pic from "../../assets/landing-page.png"
import pic2 from "../../assets/paddle-pals.png"

function ProjectItem(props) {
  return (
    <div className='project-item'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.url} target='_blank' rel='noreferrer'>Youtube Link</a>
    </div>
  );
}

function Projects() {
  return (
    <div className='projects-container'>
      <div className='projects-list1'>
        <ProjectItem
          title='Landing Page'
          description="This is a simple landing page I made for my fiance. She does wedding/couples photography."
          url='https://www.youtube.com/watch?v=zF6ZoO_HG2g&t=49s&ab_channel=RyanJolley'
        />
        <img src={pic} alt="project"/>
      </div>
      <div className='projects-list2'>
        <ProjectItem
          title='Paddle Pals'
          description="Paddle Pals is a kayak/paddleboard app that allows users to add, search, and save their favorite paddle spots."
          url='https://www.youtube.com/watch?v=GnWYMrnfLLg&t=15s&ab_channel=RyanJolley'
        />
        <img src={pic2} alt="project"/>
      </div>
    </div>
  );
}


export default Projects;

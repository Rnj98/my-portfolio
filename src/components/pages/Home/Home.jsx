import React from 'react'
import "./Home.css"
import picture from "../../assets/port0.png"


const Home = () => {
  return (
    <div>
      <div className='home-content'>
      <img src={picture} style={{ width: '25%', height: 'auto' }} />
        <p>
        Welcome to my portfolio website! My name is Ryan Jolley and I'm a passionate web developer who loves to code and solve puzzles and challenges. When I'm not working on exciting web projects, you can find me spending time with my fiance and dogs, riding my dirt bike, or playing video games. Please take a look around my portfolio to see some of my latest projects and don't hesitate to reach out if you have any questions.
        </p>
      </div>
    </div>
  )
}
export default Home;
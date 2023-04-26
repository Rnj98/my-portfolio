import React from 'react'
import "./Home.css"
import picture from "../../assets/port0.png"


const Home = () => {
  return (
      <div className='home-content'>
      <img src={picture} alt="portriat" />
        <p className='home-p'>
        Welcome to my portfolio website! My name is Ryan Jolley and I'm a passionate web developer who loves to code and solve puzzles and challenges. When I'm not working on exciting web projects, you can find me spending time with my fiance and dogs, riding my dirt bike, or playing video games.
        </p>
      </div>
  )
}
export default Home;
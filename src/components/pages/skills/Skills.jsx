import React from "react";
import "./Skills.css";
import { assets } from "./assets";
function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-row-container">
        <div className="icon-row">
          <p className="title">Languages</p>
          <div className="icon-container">
            <div className="icon-img">
              <img src={assets.JS} alt="chrome" />
            <p>JavaScript</p>
            </div>
            <div className="icon-img">
              <img src={assets.HTML} alt="chrome" />
            <p>HTML5</p>
            </div>
            <div className="icon-img">
              <img src={assets.CSS} alt="chrome" />
            <p>CSS3</p>
            </div>
            <div className="icon-img">
              <img src={assets.SQL} alt="chrome" />
            <p>SQL</p>
            </div>
          </div>
        </div>
        <div className="icon-row">
          <p className="title">Frameworks & Libraries</p>
          <div className="icon-container">
          <div className="icon-img">
              <img src={assets.REACT} alt="chrome" />
            <p>React</p>
            </div>
            <div className="icon-img">
              <img src={assets.REDUX} alt="chrome" />
            <p>Redux</p>
            </div>
            <div className="icon-img">
              <img src={assets.AXIOS} alt="chrome" />
            <p>Axios</p>
            </div>
            <div className="icon-img">
              <img src={assets.NODE} alt="chrome" />
            <p>Node.js</p>
            </div>
            <div className="icon-img">
              <img src={assets.JWT} alt="chrome" />
            <p>JWT</p>
            </div>
            <div className="icon-img">
              <img src={assets.EXPRESS} alt="chrome" />
            <p>Express</p>
            </div>
            <div className="icon-img">
              <img src={assets.SEQUELIZE} alt="chrome" />
            <p>Sequelize</p>
        </div>
            </div>
          </div>
          <div className="icon-row">
            <p className="title">Data Management</p>
            <div className="icon-container">
            <div className="icon-img">
              <img src={assets.POSTGRESQL} alt="chrome" />
            <p>PostgreSQL</p>
            </div>
            <div className="icon-img">
              <img src={assets.BIT} alt="chrome" />
            <p>Bit.io</p>
            </div>
          </div>
          </div>
          <div className="icon-row">
            <p className="title">Integration & Testing</p>
            <div className="icon-container">
            <div className="icon-img">
              <img src={assets.SELENIUM} alt="chrome" />
            <p>Selenium</p>
            </div>
            <div className="icon-img">
              <img src={assets.JEST} alt="chrome" />
            <p>Jest</p>
            </div>
            <div className="icon-img">
              <img src={assets.CHROME} alt="chrome" />
            <p>Chromedriver</p>
            </div>
          </div>
          </div>
          <div className="icon-row">
            <p className="title">Tools & Software</p>
            <div className="icon-container">
            <div className="icon-img">
              <img src={assets.AWS} alt="chrome" />
            <p>AWS</p>
            </div>
            <div className="icon-img">
              <img src={assets.VSCODE} alt="chrome" />
            <p>VSCode</p>
            </div>
            <div className="icon-img">
              <img src={assets.HEROKU} alt="chrome" />
            <p>Heroku</p>
            </div>
            <div className="icon-img">
              <img src={assets.GITHUB} alt="chrome" />
            <p>Github</p>
            </div>
            <div className="icon-img">
              <img src={assets.GIT} alt="chrome" />
            <p>Git</p>
            </div>
            <div className="icon-img">
              <img src={assets.POSTMAN} alt="chrome" />
            <p>Postman</p>
            </div>
            <div className="icon-img">
              <img src={assets.FIGMA} alt="chrome" />
            <p>Figma</p>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Skills;

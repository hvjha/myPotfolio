import React from "react";
import "./about.css";
import ME from "../../assets/Harsh_img.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
          
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>02</small>
            </article>

            <article className="about_card">
              <AiOutlineProject className="about_icon" />
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>
          <p>
            I'm Harsh Vardhan Jha, a MERN stack developer, i am experienced in developing Frontend, Backend, MERN Stack, Full Stack and have some knowledge about python and MYSQL.
            I also worked on some project like e-commerce platform,Sticky Notes,Toor and Travel, Schhool Managment System project, Real time Chat Applicationetc..
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

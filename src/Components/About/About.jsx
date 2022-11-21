import React from 'react'
import { FaFighterJet, FaWindowRestore ,  FaRocket , FaBolt } from "react-icons/fa"
import './About.scss'
import profilePic from "../../Assets/profilePic1.jpg";

const About = () => {
  return (
    <section id="section-about" className="about-section bg-transparent my-5">
      <h2 className='fs-1 text-center'>About</h2>
      <div className="all-sections">
        <div data-aos="fade-right" className="mini-section">
          <div className="hexagon">
            <FaFighterJet />
          </div>
          <div className="text-mini-section">
            <h3 className='fs-2 my-3'>Fast</h3>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="mini-section">
          <div className="hexagon">
          <FaWindowRestore />
          </div>
          <div className="text-mini-section">
            <h3 className='fs-2 my-3'>Responsive</h3>
            <p>My layouts will work on any device, big or small.</p>
          </div>
        </div>
        <div data-aos="fade-up" className="mini-section">
          <div className="hexagon">
          <FaWindowRestore />
          </div>
          <div className="text-mini-section">
            <h3 className='fs-2 my-3'>Intuitive</h3>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
        </div>
        <div data-aos="fade-left" className="mini-section">
          <div className="hexagon">
            <FaBolt />
          </div>
          <div className="text-mini-section">
            <h3 className='fs-2 my-3'>Dynamic</h3>
            <p>
              Websites don't have to be static, I love making pages come to life
            </p>
          </div>
        </div>
      </div>
      <div className="who-am-i">
        <div data-aos="zoom-in-up" className="image-me">
          <img src={profilePic} alt="" className='w-100'/>
        </div>
        <div className="all-who">
          <h2 className='fs-1 text-center' data-aos="zoom-in-down">Who am I?</h2>
          <div className="div-para">
            <p data-aos="zoom-in-down">
              My name is Ahmed Rizk and I am a Front End
              Developer from Egypt, Cairo. I am self-taught developer,
              passionate and very fast learner. I have learned how to program
              through various resources, currently I am learning on Freecodecamp
              and Udacity. I am eager to learn and grow - Everyday. My ambition
              is to make awesome websites, not just good enough.
            </p>
          </div>
          <button data-aos="zoom-in-down" className="hvr-bounce-to-right">
            <a className='text-dark' href='https://github.com/ahmed22115522' target='_blank'>Github Profile</a> 
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
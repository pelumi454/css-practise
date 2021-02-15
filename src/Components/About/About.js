import React from 'react'
import './About.scss'
import twitter from '../../img/twitter.svg'
import github from '../../img/github.svg'
import linkedin from '../../img/linkedin.svg'

const About = () => {
    return (
        <div className="about"> 
            <p className="about-p1">About Me</p>
            <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi deserunt eligendi officiis perferendis, harum modi accusamus deleniti, commodi velit sunt nulla est quasi necessitatibus. Harum excepturi expedita assumenda laudantium veniam sed error autem totam! Quisquam esse consectetur expedita explicabo quos consequatur culpa rem repudiandae id, recusandae laborum eaque, perferendis ex. Vel minima omnis nam possimus, pariatur, numquam accusamus fugit recusandae voluptates earum cupiditate eligendi aut blanditiis quisquam, animi commodi itaque explicabo quos consequatur culpa rem repudiandae id, recusandae laborum eaque, perferendis ex. Vel minima omnis nam possimuspa.</p>
            <div className="about-icons">
                <img src={twitter} alt="twitter-icon"/>
                <img src={github} alt="github-icon"/>
                <img src={linkedin} alt="linkedin-icon"/>
            </div>
        </div>
    )
}

export default About;

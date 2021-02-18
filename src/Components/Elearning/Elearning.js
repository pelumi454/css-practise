import React from 'react'
import './Elearning.scss'
import {Link} from 'react-router-dom'
import elearn from '../../img/elearn.jfif'

const Elearning = () =>  {
    return (
        <div className="elearning">
            <img src={elearn} alt="library-img" className="elearning-img"/>
            <div className="sub-learning">
            <h4>An Introduction into information technology</h4>
            <p className="elearning-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lacus tellus. Etiam nec sem nibh. Nullam pulvinar quis sapien at tincidunt. In elit quam, consectetur eget felis bibendum, egestas luctus risus. Etiam ut enim sapien. Ut dictum, mi id malesuada rhoncus, elit velit porttitor purus, sit amet lobortis elit dui libero. Praesent nec nibh quis felis faucibus molestie. Nullam vehicula purus quis dui commodo dapibus. Ut sed aliquam enim .</p>
            <button className="elearning-button">Start Learning</button>
            </div>
            <Link to='/Faq'>
            <button className="button">Next</button>
            </Link>
        </div>
    )
}

export default Elearning;

import React from 'react'
import Profile from "../images/yogesh.jpg"


const Home = () => {
    return (
        <div className="container">
            <img src={Profile} alt="profilePic" className="myPic" />
            <h1 className="name">Yogesh Gaur</h1>
            <p className="about">
                I am a 3rd Year Btech Student of AKTU. I am a MERN stack devloper and develop websites and Apps in MERN stack.
            </p>
        </div>
    )
}

export default Home

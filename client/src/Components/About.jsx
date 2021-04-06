import React from 'react'
import Profile from "../images/yogesh.jpg"


const About = () => {
    return (
        <>
            <img src={Profile} class="cardImg" alt="..." />
            <div class="column container">
                <div class="cardProfile">
                    <form action="/signup" method="POST">
                        <div className="form-group">
                            <label className="labelRegister" for="name">Name</label>
                            <input type="text" className="form-control" id="nameAbout" name="nameAbout" autoComplete="none" />
                        </div>
                        <div className="form-group">
                            <label className="labelRegister" for="email">Email</label>
                            <input type="text" className="form-control" id="emailAbout" name="emailAbout" autoComplete="none" />
                        </div>
                        <div className="form-group">
                            <label className="labelRegister" for="work">Work</label>
                            <input type="text" className="form-control" id="workAbout" name="workAbout" autoComplete="none" />
                        </div>
                        <div className="form-group">
                            <label className="labelRegister" for="phone">Phone</label>
                            <input type="text" className="form-control" id="phoneAbout" name="phoneAbout" autoComplete="none" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default About

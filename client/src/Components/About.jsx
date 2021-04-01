import React from 'react'
import Profile from "../images/yogesh.jpg"

const About = () => {
    return (
        <>
            <div class="card container" style={{ width: "23rem" }}>
                <img src={Profile} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">About Me</h5>
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

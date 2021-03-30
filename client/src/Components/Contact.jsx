import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

const Contact = () => {
    return (
        <>
            <h1 className="headingContact">Have Some Query Message Us !!!</h1>
            <div className="containerFormContact">
                <form action="/signup" method="POST">
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="name" name="name" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Email</label>
                        <input type="text" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Message</label>
                        <textarea type="text" className="form-control" rows="5" columns="10" id="phone" name="phone" />
                    </div>
                    <button type="submit" className="btnContact">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact

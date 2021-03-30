import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

const SignUp = () => {
    return (
        <>
            <h1 className="headingRegister">Start Your Journey From Here !!!</h1>
            <div className="containerFormRegister">
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
                        <label className="labelRegister" for="exampleInputEmail1">Phone</label>
                        <input type="text" className="form-control" id="phone" name="phone" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Work</label>
                        <input type="text" className="form-control" id="work" name="work" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputPassword1">CPassword</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" />
                    </div>
                    <button type="submit" className="btnRegister">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp

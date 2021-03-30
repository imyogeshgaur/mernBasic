import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

const Login = () => {
    return (
        <>
            <h1 className="headingLogin">Get Ready For Awesome Surprises !!!</h1>
            <div className="containerFormLogin">
                <form action="/signup" method="POST">
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Email</label>
                        <input type="text" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>
                    <button type="submit" className="btnLogin">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login

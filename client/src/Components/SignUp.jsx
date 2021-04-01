import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const SignUp = () => {
    return (
        <>
            <h1 className="headingRegister">Start Your Journey From Here !!!</h1>
            <div className="containerFormRegister">
                <form action="/signup" method="POST">
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="nameRegister" name="nameRegister" autoComplete="none" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Email</label>
                        <input type="text" className="form-control" id="emailRegister" name="emailRegister" autoComplete="none"/>
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Phone</label>
                        <input type="text" className="form-control" id="phoneRegister" name="phoneRegister" autoComplete="none"/>
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Work</label>
                        <input type="text" className="form-control" id="workRegister" name="workRegister" autoComplete="none"/>
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

import React from 'react'



const Contact = () => {
    return (
        <>
            <h1 className="headingContact">Have Some Query Message Us !!!</h1>
            <div className="containerFormContact">
                <form action="/signup" method="POST">
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="nameContact" name="nameContact" autoComplete="none" />
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Email</label>
                        <input type="text" className="form-control" id="emailContact" name="emailContact" autoComplete="none"/>
                    </div>
                    <div className="form-group">
                        <label className="labelRegister" for="exampleInputEmail1">Message</label>
                        <textarea type="text" className="form-control" rows="5" columns="10" id="message" name="message" autoComplete="none"/>
                    </div>
                    <button type="submit" className="btnContact">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact

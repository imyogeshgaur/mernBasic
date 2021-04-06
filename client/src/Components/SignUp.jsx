import React,{useState} from 'react'
import {useHistory} from "react-router-dom"


const SignUp = () => {
  const history = useHistory();
  const [users, setUsers] = useState({
    nameRegister:"",
    emailRegister:"",
    phoneRegister:"",
    workRegister:"",
    password:"",
    cpassword:""
  });

  let name,value;
  const handleEvent = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setUsers({...users,[name]:value});

  }

  const sendData = async(e) =>{
    e.preventDefault();

    const {nameRegister,emailRegister,phoneRegister,workRegister,password,cpassword} = users;

    const response = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:nameRegister,email:emailRegister,phone:phoneRegister,work:workRegister,password,cpassword})
    });
    
    const data = await response.json();

    if(data.status === 422 || !data){
      alert("Invalid Registration !!!")
    }else{
      alert('Registerd Sucessfully !!!')

      history.push("/signin");
    }
  }
    return (
        <>
        <h1 className="headingRegister">Start Your Journey From Here !!!</h1>
        <div className="containerFormRegister">
        <form method="POST">
        <div className="form-group">
          <label className="labelRegister" for="name">Name</label>
          <input type="text" className="form-control" id="nameRegister" name="nameRegister" autoComplete="none" value={users.nameRegister} onChange={handleEvent}/>
        </div>
        <div className="form-group">
          <label className="labelRegister" for="email">Email</label>
          <input type="text" className="form-control" id="emailRegister" name="emailRegister" autoComplete="none" value={users.emailRegister} onChange={handleEvent} />
        </div>
        <div className="form-group">
          <label className="labelRegister" for="work">Work</label>
          <input type="text" className="form-control" id="workRegister" name="workRegister" autoComplete="none"  value={users.workRegister} onChange={handleEvent}/>
        </div>
        <div className="form-group">
          <label className="labelRegister" for="phone">Phone</label>
          <input type="text" className="form-control" id="phoneRegister" name="phoneRegister" autoComplete="none" value={users.phoneRegister} onChange={handleEvent}/>
        </div>
        <div className="form-group">
          <label className="labelRegister" for="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={users.password} onChange={handleEvent}  />
        </div>
        <div className="form-group">
          <label className="labelRegister" for="cPassword">CPassword</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword"  value={users.cpassword} onChange={handleEvent}/>
        </div>
        <button type="submit" className="btnRegister" onClick={sendData}>Submit</button>
      </form>
        </div>
        </>
    )
}

export default SignUp

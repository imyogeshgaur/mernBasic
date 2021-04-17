import React,{useState} from 'react'
import {useHistory} from "react-router-dom"

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email:"",
    password:""
  });
 
  let name,value;
  const handleData = (e) =>{
    name=e.target.name;
    value=e.target.value

    setUser({...user,[name]:value});
  }
  const getData = async(e) =>{
      e.preventDefault();
      const {email,password} = user;

      const response = await fetch('/signin',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
      });

      const data = response.json();

      if(data.status === 400 || !data){
        alert("Invalid Credentials !!!");
      }else{
        alert("Login Sucessfull !!!");
        history.push("/");
      }
  }
    return (
        <>
        <h1 className="headingLogin">Get Ready For Awesome Surprises !!!</h1>
        <div className="containerFormLogin">
        <form method="POST">
        <div className="form-group">
          <label className="labelRegister" for="exampleInputEmail1">Email</label>
          <input type="text" className="form-control" id="email" name="email" autoComplete="none"
          value={user.email} onChange={handleData}/>
        </div>
        <div className="form-group">
          <label className="labelRegister" for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleData}/>
        </div>
        <button type="submit" className="btnLogin" onClick={getData}>Submit</button>
      </form>
        </div>  
        </>
    )
}

export default Login

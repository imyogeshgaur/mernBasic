import React from 'react'
import { NavLink } from "react-router-dom"
import "../yogesh.css"


const NavBar = () => {
    const barsClicked = () =>{
        const bars = document.querySelector('#bars');
        const close = document.querySelector('#close');
   
        bars.style.display = "none";
        close.style.display = "block";
     }
   
     const closeClicked  = () =>{
       const bars = document.querySelector('#bars');
       const close = document.querySelector('#close');
   
       bars.style.display = "block";
       close.style.display = "none";
   
     }
     return (
       <>
         <nav>
           <input type="checkbox" id="check" />
           <label for="check" class="checkbtn">
             <i class="fas fa-bars" id="bars" onClick={barsClicked}></i>
             <i class="fas fa-times" id="close" onClick={closeClicked}></i>
           </label>
           <label class="logo">Yogesh Gaur</label>
           <ul>
             <li><NavLink style={{textDecoration:"none"}} to="/index">Home</NavLink></li>
             <li><NavLink style={{textDecoration:"none"}} to="/about">About</NavLink></li>
             <li><NavLink style={{textDecoration:"none"}} to="/contact">Contact</NavLink></li>
             <li><NavLink style={{textDecoration:"none"}} to="/signin">Login</NavLink></li>
             <li><NavLink style={{textDecoration:"none"}} to="/signup">Signup</NavLink></li>
           </ul>
         </nav>
       </>
     )
}

export default NavBar

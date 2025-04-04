import './Sign.css'
import email_icon from '../assets/icons/email.png'
import user_icon from '../assets/icons/person.png'
import password_icon from '../assets/icons/password.png'
import { useState } from 'react'
/* eslint-disable no-unused-vars */
import React from "react"
import axios from 'axios'


const Sign = () => {
  const [action,setAction]= useState("Log In")

  const [post, setPost] = useState({
    title:'',
    body:''
})
const handelInput =(event) =>{
  setPost({...post, [event.target.name]: event.target.event})
}
function handleSubmit(event){
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      
        userId: 1,
        id: 2,
        title: "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
      {
        title: 'My Title',
        body: 'This is a test post',
        userId: 1
})
    .then(response => {
        console.log('Success:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
        </div>
<form action="" onSubmit={handleSubmit} >
    <div className='inputs' >
       {/* input 2 */}
       
       <div className='input' onChange={handelInput}>
            <img src={user_icon} alt="" />
            <input type="text"  placeholder='FirstName'/>
        </div>

        <div className='input' onChange={handelInput}>
            <img src={user_icon} alt="" />
            <input type="text"  placeholder='LastName'/>
        </div>

        <div className='input' onChange={handelInput}>
            <img src={user_icon} alt="" />
            <input type="text"  placeholder='NickName'/>
        </div>
       
       
        {/* input 2 */}
        <div className='input' onChange={handelInput}>
            <img src={email_icon} alt="" />
            <input type="email"  placeholder='Email Address'/>
        </div>
          {/* input 3 */}
          <div className='input' onChange={handelInput}>
            <img src={password_icon} alt="" />
            <input type="password"  placeholder='password'/>
        </div>

         {/* input 4 */}
         <div className='input' onChange={handelInput}>
            <img src={password_icon} alt="" />
            <input type="password"  placeholder='confirm password'/>
        </div>

        
    </div>

    <div className="submit-container">
       <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
       
       
       {/* <button className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}} > Login</button> */}

       <div className={action==="Sign Up"?"login-gray":"login"}onClick={()=>{setAction("Log In")}}> Already have an account?<a href="">Log In</a></div>
    </div>
    </form>
    </div>
  )
}

export default Sign
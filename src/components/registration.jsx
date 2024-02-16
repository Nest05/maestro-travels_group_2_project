import React from 'react'
import './registration.css'
import email_icon from '../Assets/email icon png.jpg'
import user_icon from '../Assets/user icon png'
import password_icon from '../Assets/password icon png.png'
import React, {useState} from "react"
import Login from './Login'



function registration() {

    const[action,setAction] = useState('Sign up')


  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
        <div className='inputs'>
            {action==='login'?<div></div>: <div className='input'>
            <img src={user_icon} alt=''/>
            <input type='text' placeholder="Name"/>
        </div>}
       
        <div className='input'>
            <img src={email_icon} alt=''/>
            <input type='email' placeholder="email"/>
        </div>
        </div>
        <div className='input'>
            <img src={password_icon} alt=''/>
            <input type='password' placeholder='password'/>
        </div>
        </div>
        {action==='Sign up'?<div></div>:<div className='forgot-password'>forgot password? <span>click here</span></div>}
        
        <div className='submit-container'>
            <div className={action==="login"?"submitgray":"submit"}onClick={()=>{setAction("Sign up")}}>Sign up</div>
            <div className={action==="Sign up"?"submitgray":"submit"}onClick={()=>{setAction("login")}}>login</div>
        </div>
    </div>
  )
}

export default registration

import React, { useState } from 'react';
import Back from '../common/back/Back';
import "./login.css";

const Login = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }


  return (
    <>
       <Back />
      <div className="cover">
          <h1>LOGIN</h1>
          <input type='text' placeholder='Username' />
          <input type='password'  placeholder='Password' />
          
          <div className="login-btn" onClick={popup}>Login</div>
            {/* <p className="text">Or Login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div> */}
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
      </div>      
    </>
  )
}

export default Login

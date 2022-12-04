import React from "react"
import { Link } from "react-router-dom";
import "../../styles/SignUp.css"
import logo from "../../images/img4.png";
import {EyeSlashFill} from "react-bootstrap-icons"

export default function SignUp() {

    function showPassword(myInput) {
        var x = document.getElementById(myInput);
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
        <div className="login-container">
            <div className="login-form-container">
                <form className="form-box" onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <div className="form-signin-box">
                        <button >Sign Up</button>
                    </div>
                    <div className="form-ipcnfrmpswd-box">
                        <input id="signup-pswd" type="password" placeholder="Confirm Password" />
                        <EyeSlashFill onClick={()=>{
                            showPassword("signup-pswd")
                        }} style={{"position":"absolute","marginLeft":"-30px","marginTop":"10px","color":"#AAAAAA"}}/>
                    </div>
                    <div className="form-ippswd-box">
                        <input id="signup-pswd2" type="password" placeholder="Password" />
                        <EyeSlashFill onClick={()=>{
                            showPassword("signup-pswd2")
                        }} style={{"position":"absolute","marginLeft":"-30px","marginTop":"10px","color":"#AAAAAA"}}/>
                    </div>
                    <div className="form-ipuserid-box">
                        <input type="text" placeholder="Mail ID" />
                    </div>
                    <div className="form-upper">
                        <div className="form-upper-img">
                        <div className="sidebar-img-container">
                                <img src={logo} />
                            </div>
                        </div>
                        <div className="form-p-box">
                            <p>Create New Account</p>
                        </div>
                    </div>
                </form>
                <div className="switch-container">
                    <p>Don't have an account? <Link to="/login" className="singup-link">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
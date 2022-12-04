import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api-utils/Api";
import "../../styles/SignUp.css"
import logo from "../../images/img4.png";
import {EyeSlashFill} from "react-bootstrap-icons"

export default function Login() {
    const navigate = useNavigate();

    function showPassword(myInput) {
        var x = document.getElementById(myInput);
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    const loginHandler = () => {
        let token = localStorage.getItem("MYJWT");
        console.log("Login comp- token: ", token);
        login().then(res => {
            if (res == "TOKEN-VALID" || res == "NEW-TOKEN-VALID") {
                localStorage.setItem("MYJWT", res);
                navigate("/home");
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="login-container">
            <div className="login-form-container">
                <form className="form-box" onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className="form-signin-box">
                        <button onClick={loginHandler} >Sign In</button>
                    </div>
                    <div className="form-ippswd-box">
                        <input id="login-pswd" type={"password"} placeholder="Password"></input>
                        <EyeSlashFill onClick={()=>{
                            showPassword("login-pswd")
                        }} style={{"position":"absolute","marginLeft":"-30px","marginTop":"10px","color":"#AAAAAA"}}/>
                    </div>
                    <div className="form-ipuserid-box">
                        <input type="text" placeholder="User ID" />
                    </div>
                    <div className="form-ipcnfrmpswd-img-box">
                        <img />
                        {/* <input type="text" placeholder="Confirm Password" /> */}
                    </div>
                    <div className="form-upper">
                        <div className="form-upper-img">
                            <div className="sidebar-img-container">
                                <img src={logo} />
                            </div>
                        </div>
                        <div className="form-p-box">
                            <p>Enter your credentials to access your account</p>
                        </div>
                    </div>
                </form>
                <div className="switch-container">
                    <p>Don't have an account? <Link to="/signup" className="singup-link">SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}

// Im login component <button onClick={loginHandler}>Login</button>
// <div>
//     New here? <Link to="/signup">SignUp</Link>
// </div>

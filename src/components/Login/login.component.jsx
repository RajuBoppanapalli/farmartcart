import { Button } from "react-bootstrap";
import "../Login/login.component.css";
import { ArrowRight, Lock } from "react-bootstrap-icons";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getcustomers } from "../../services/customer.service";
import axios from "axios";
import { setLocalStorageItem } from "../../services/storage/local.storage";

export function Login() {
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef()


    function userlogin() {
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        getcustomers().then((res) => {
            let Filterdata = res.data.filter((item) =>
                item.email === email && item.password === password
            );

            if (Filterdata.length > 0) {
                setLocalStorageItem("userdata", Filterdata);
                alert("user exist")
                navigate('/home')
                window.location.reload();


            } else {
                alert("User does not exist");
            }
        }).catch((ex) => {
            alert(ex.message);
        });
    }



    return (

        <div className="login-form">
            <div className="login-head">
                <div className="login-icon">
                    <span><Lock /></span>
                </div>
                <div>
                    <h4>Login to your account</h4>
                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                </div>
            </div>

            <div className="login-group">
                <label>Email:</label>
                <br />
                <input
                    type="email"

                    ref={emailRef} placeholder="enter your email"

                    required
                />
            </div>

            <div className="login-group">
                <label>Password:</label>
                <br />
                <input
                    type="password"

                    ref={passwordRef}
                    placeholder="Password"


                    required
                />
            </div>

            <div className="forgot">
                <span><input type="checkbox" /> Remember Me</span>
                <span className="forgot-link"><a href="#">Forgot Password?</a></span>
            </div>

            <div className="login-group">
                <Button type="submit" onClick={() => { userlogin() }} >Login <ArrowRight /></Button>
            </div>

            <span className="login-group"> Don't have an account? <a href="#">Register now</a> </span>
            <br />
            <span className="or">Or login with</span>
        </div>

    );
}

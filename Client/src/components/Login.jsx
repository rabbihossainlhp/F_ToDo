import React from 'react';
import "./ComponentStyle/Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {




    //back in sign up page by clicking sign up button on sign in page...
    const navigate = useNavigate();
    const clickSignup = ()=>{
        navigate("/signup");
    }   



    return (
        <div className='Login-container'>
            <div className="Login-box">
                <div className="Login-Title">
                    <h1>Let's Contribute Here</h1>
                    <button onClick={clickSignup}>Sign up</button>
                </div>
                <div className="Login-Form">
                    <h1>Sign in</h1>
                    <form action="">                     
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Email' />
                        </div>
                        
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Password' />
                        </div>   
                        <button type='submit'>Sign in</button>                                               
                    </form>
                </div>
            </div>
        </div>  
    );
};

export default Login;
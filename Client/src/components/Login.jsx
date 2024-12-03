import React from 'react';
import "./ComponentStyle/Login.css"

const Login = () => {
    return (
        <div className='Login-container'>
            <div className="Login-box">
                <div className="Login-Title">
                    <h1>Let's Contribute Here</h1>
                    <button>Sign up</button>
                </div>
                <div className="Login-Form">
                    <h1>Sign in</h1>
                    <form action="">                     
                        <div>
                            <label htmlFor="name">Email</label>
                            <input type="text" placeholder='Email' />
                        </div>
                        
                        <div>
                            <label htmlFor="name">Password</label>
                            <input type="text" placeholder='Password' />
                        </div>                         
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
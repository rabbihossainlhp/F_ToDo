import React from 'react';
import "./ComponentStyle/Signup.css";

const Signup = () => {
    return (
        <div className='Signup-container'>
            <div className="Signup-box">
                <div className="Signup-Title">
                    <h1>Welcome to join with us</h1>
                    <button>Sign in</button>
                </div>
                <div className="Signup-Form">
                    <h1>Signup</h1>
                    <form action="">                     
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Enter Name' />
                        </div>
                        
                        <div>
                            <label htmlFor="name">Phone</label>
                            <input type="text" placeholder='Number' />
                        </div>
                        
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

export default Signup;
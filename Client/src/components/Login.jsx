import React from 'react';
import "./ComponentStyle/Login.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    
    const navigate = useNavigate(); 

    //Hadle submit form and check data from database......
    const loginHandler = async(e)=>{
        e.preventDefault();
        //collecting data....
        const data = {email,password};
        
        try{
            const dataFetch = await fetch(`http://localhost:5000/login`,{
                                            method: "POST",
                                            headers:{"Content-type":"application/json"},
                                            body:JSON.stringify(data)
                                        });
            if(dataFetch.ok){
                const result = await dataFetch.json();
                console.log(result);
                if(result.token){
                    localStorage.setItem("token",result.token);
                    localStorage.setItem("uid",result.uid);
                    toast.success("Login SucessFully!");
                }else{
                    // console.log("Token is not receved from server");
                    toast.error("Something wrong with login/token info");
                }
    
                //refresh__form...
                setEmail("");
                setPassword("");
    
                setTimeout(() => {
                    navigate("/taskboard");
                }, 1000);
                
            }else{
                toast.error("Please fillup form correctly");
            }       
        }catch(err){
            toast.error("Something is wrong..");
        }
        
    }//__________________________________________________________________________________   



    //back in sign up page by clicking sign up button on sign in page...
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
                    <form action="" onSubmit={loginHandler}>                     
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>   
                        <button type='submit'>Sign in</button>                                               
                    </form>
                </div>
            </div>
        </div>  
    );
};

export default Login;
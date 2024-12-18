import React, { useState,useEffect } from 'react';
import "./ComponentStyle/Signup.css";
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';


const Signup = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    
    

    //Hadle submit form and save data in database......
    const submitHandler = async(e)=>{
        e.preventDefault();
        //collecting data....
        const data = {name,phone,email,password};
        
        try{
            const dataFetch = await fetch(`${process.env.backendLink}/signup`,{
                                            method: "POST",
                                            headers:{"Content-type":"application/json"},
                                            body:JSON.stringify(data)
                                        });
            if(dataFetch.ok){
                const result = await dataFetch.json();
                // console.log(result);
                toast.success("Sign up successfully!!");

                //refresh__form...
                setName("");
                setPhone("");
                setEmail("");
                setPassword("");

                setTimeout(() => {
                    navigate("/login");
                }, 1000);
                
            }else{
                toast.err("Please input Password or email correctly!!");
            }          
        }catch(err){
            console.log("Error",err);
            toast.error("Server is not responding well pls try later");
        }
        
    }//__________________________________________________________________________________
    

    //if once login user then he can't back into previous signin/up page...
    useEffect(()=>{
        const Localtoken  = localStorage.getItem("token");
        if(Localtoken){
            navigate("/taskboard");
        }
    },[])       



    //simply navigate login form by clicking sign in btn....
    const navigate = useNavigate();
    const clickSignin = ()=>{
        navigate("/login");
    }



    return (
        <div className='Signup-container'>
            <div className="Signup-box">
                <div className="Signup-Title">
                    <h1>Welcome to join with us</h1>
                    <button onClick={clickSignin} >Sign in</button>
                </div>
                <div className="Signup-Form">
                    <h1>Signup</h1>
                    <form action="" onSubmit={submitHandler}>                     
                        <div>
                            <label htmlFor="name">Name</label>
                            <input  type="text" placeholder='Enter Name'value={name} onChange={e=>setName(e.target.value)} />
                        </div>
                        
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input  type="number" placeholder='Number' value={phone} onChange={e=>setPhone(e.target.value)}/>
                        </div>
                        
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <button type='submit'>Signup</button>                         
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
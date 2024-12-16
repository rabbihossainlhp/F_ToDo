import React from 'react';
import "./pageStyle/HomePage.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

    const navigate = useNavigate();

        //if once login user then he can't back into previous signin/up page...
        useEffect(()=>{
            const Localtoken  = localStorage.getItem("token");
            if(Localtoken){
                navigate("/taskboard");
            }
        },[])  
            
    return (
        <div>
            <div className="signup-in">
                <button onClick={()=>navigate("/signup")}>Sign up</button>
                <button onClick={()=>navigate("/login")}>Login</button>
            </div>

            <div className="quotes">
                <p>Each task you complete, no matter how minor, is a building block for something greater. The secret to success is not in giant leaps but in the consistent, deliberate progress you make over time. Remember, even the tallest mountain is climbed one step at a time</p>
            </div>
            

            <div className="startBtn">
                <button onClick={()=>navigate("/signup")}>Let's Start ---> </button>
            </div>
        </div>
    );
};

export default Home;    
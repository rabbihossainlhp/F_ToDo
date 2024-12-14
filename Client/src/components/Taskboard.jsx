import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ComponentStyle/Taskboard.css";

const Taskboard = () => {
    const [isOpenWindow, setIsOpenWindow] = useState(false);
    const navigate = useNavigate();
    
    const [title,setTitle] = useState('');
    const [subtitle,setSubtitle] = useState('');
    const [description,setDescription] = useState('');

    const [task,setTask] = useState("");




    //verify with useEffect________________________
    useEffect(()=>{
        let fetchUserTask = async()=>{
            const getUid = localStorage.getItem("uid"); 
            try{
                let response = await fetch("http://localhost:5000/taskboard/create",{
                    method:"GET",
                    headers:{"Content-Type":"application/json","uid":getUid}
                });
                let data = await response.json();
                console.log(data);
                setTask(data);
                // console.log(response);
            }catch(er){
                console.log("Something is wrong initially fetching task"+e);
            }
        }
        
        
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
        }

        //call function fetchUsrTask...
        fetchUserTask();
    },[])



    //write handler for sumit........._/
    const submitHandler = async(e)=>{
        e.preventDefault();
        let info = {title,subtitle,description};
        const getUid = localStorage.getItem("uid");

        try{
            const response = await fetch('http://localhost:5000/taskboard/create',{
                method:"POST",
                headers:{"Content-Type":"application/json","uid":getUid},
                body:JSON.stringify(info)
            });
            let data = await response.json();
            console.log(data);
            console.log(response.ok);
            if(response.ok){
                setTask((prvTask)=>[...prvTask,data]),
                console.log("successfully added");
                setTitle('');
                setSubtitle('');
                setDescription('');
            }
            // console.log(response.json());

        }catch(err){
            console.log("error in catch",err)
        }
    }


    //handle hiden button__________________________
    const hidenBtnHandler = ()=>{
        // const hidenBtn = document.querySelector(".hidenWindow");
        // const createBtn = document.querySelector(".btnDiv button");
        // hidenBtn.style.display = "flex"; 
        // createBtn.style.cursor = "not-allowed";

        setIsOpenWindow(true);
    }     

    //handle hiden closing button__________________________
    const hidenClsHandler = ()=>{
        // const hidenBtn = document.querySelector(".hidenWindow");
        // const createBtn = document.querySelector(".btnDiv button");
        // hidenBtn.style.display = "none"; 
        // createBtn.style.cursor = "pointer";

        setIsOpenWindow(false);
    }       

    


    return (
        <div className='Task-container'>
            <div className="Sidebar">
                <div className="innerSide">
                    <div className="btnDiv">
                        <button  onClick={hidenBtnHandler}>+ Create New</button>
                    </div>

                    <div className="taskList">
                        {task.length>0?
                            task.map((item,index)=>{
                                return(
                                    <div className="taskItem" key={index}>
                                        <h1>{item.title}</h1>
                                    </div>
                                )
                            })
                        :
                            (
                                <p>No Task available</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="View-Task">
                <div className="Sub-view">
                    <div className="initialShow">
                        <h1>Small steps everyday lead to big result</h1>
                        <p>It’s a gentle reminder that consistent effort, no matter how small, moves you closer to your goals!</p>
                    </div>
                </div>
                </div>
            
            {/* Hidden window_________________________ */}

            {isOpenWindow &&(
                <div className={`hidenWindow ${isOpenWindow?'show':''}`}>
                    <div className="clsBtn" onClick={hidenClsHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                    <div className="TitleHead">
                        <p>Create New Task</p>
                    </div>
                    <div className="formBox">
                        <form action="" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="Title">Title</label>
                                <input type="text" placeholder='Task Title' value={title} onChange={e=>setTitle(e.target.value)} />
                            </div>
    
                            <div>
                                <label htmlFor="Sub-Title">Subtitle</label>
                                <input type="text" placeholder='Task Sub-Title' value={subtitle} onChange={e=>setSubtitle(e.target.value)}/>
                            </div>
    
                            <div>
                                <label htmlFor="Description">Task-Description</label>
                                <textarea
                                    id="Description"
                                    value={description}
                                    placeholder="Write task description..."
                                    onChange={e=>setDescription(e.target.value)}
                                ></textarea>
                            </div>  
    
                        <button type='submit'>Add Task</button>
                    </form>
                </div>
            </div>
            )}


        </div>  
    );
};

export default Taskboard;
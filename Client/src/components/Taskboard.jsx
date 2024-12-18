import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ComponentStyle/Taskboard.css";
import "./ComponentStyle/ResponsiveTaskboard.css";
import { toast } from 'react-toastify';

const Taskboard = () => {
    const [isOpenWindow, setIsOpenWindow] = useState(false);
    const navigate = useNavigate();
    
    const [title,setTitle] = useState('');
    const [subtitle,setSubtitle] = useState('');
    const [description,setDescription] = useState('');
    const [clickNavIcon,setClickNavIcon] = useState(false);
    const [hidenId,setHidenId] = useState(null);
    const [checkDetails,setCheckDetails] = useState(true);
    const [task,setTask] = useState("");




    //verify with useEffect________________________
    useEffect(()=>{
        let fetchUserTask = async()=>{
            const getUid = localStorage.getItem("uid"); 
            try{
                let response = await fetch(`https://todo-server-74qt.onrender.com/create`,{
                    method:"GET",
                    headers:{"Content-Type":"application/json","uid":getUid}
                });
                let data = await response.json();
                // console.log(data);
                setTask(data);
                // console.log(response);
            }catch(er){
                console.log("Something is wrong initially fetching task"+er);
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
            const response = await fetch(`https://todo-server-74qt.onrender.com/taskboard/create`,{
                method:"POST",
                headers:{"Content-Type":"application/json","uid":getUid},
                body:JSON.stringify(info)
            });
            let data = await response.json();
            // console.log(data);
            // console.log(response.ok);
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

    //handle single___ Task....
    let titleData = document.querySelector(".titleData");
    let subData = document.querySelector(".subData");  
    let descrData = document.querySelector(".descrData");
    const singleTask = (indx)=>{
        // console.log(task[indx]);
        titleData.innerText = task[indx].title;
        subData.innerText = task[indx].subtitle;
        descrData.innerText = task[indx].description;
        setHidenId(task[indx]._id);
        
    }

    //handle toggole the navIcon....
    const toggleNav = ()=>{
        setClickNavIcon((prev)=>!prev);
    }
    

    //handle the delete button _-_-_-_-___-
    const handleDelete = async ()=>{
                const getUid = localStorage.getItem("uid"); 
                try{
                    let response = await fetch(`https://todo-server-74qt.onrender.com/taskboard/create/${hidenId}`,{
                        method:"DELETE",
                        headers:{"Content-Type":"application/json","uid":getUid}
                    });
                    if(response.ok){
                        let data = await response.json();
                        console.log(data);
                        setTask(data);
                        // console.log(response);
                        document.querySelector(".titleData").innerText = "";
                        document.querySelector(".subData").innerText = "";
                        document.querySelector(".descrData").innerText = "";    
                        setHidenId(null);
                        // console.log("deleted");
                        toast.success("Delete Successfully");   
                        
                        setCheckDetails(true);


                    }else{
                        // console.log("faild deletion");
                        toast.error("Delete Faild");
                    }
                }catch(er){
                    console.log("Something is wrong initially fetching task"+e);
                }
            }



    return (
        <div className='Task-container'>
            <div className="navIcon" onClick={toggleNav}>   
                {clickNavIcon?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>   
                            :<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg> 
                }                               

            </div>
            <div className={`Sidebar ${clickNavIcon? "visibleSidebar":""}`}>
                <div className="innerSide">
                    <div className="btnDiv">
                        <button  onClick={hidenBtnHandler}>+ Create New</button>
                    </div>

                    <div className="taskList">
                        {task.length>0?
                            task.map((item,index)=>{
                                return(
                                    <div className="taskItem" key={index} onClick={()=>{singleTask(index);setCheckDetails(false)}}>
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
                    
                    <div className={`detailsView ${checkDetails? "":"hideDetails"}`}>
                        <div className="buttons">
                            <button onClick={handleDelete}>Delete</button>
                            <button>Update</button>
                        </div>
                        
                        <div className="taskInfo">
                            <h1>Your Task</h1>
                            <div className="title">
                                <h2 className='infoTitle'>Title:</h2>
                                <p className='titleData'></p>
                            </div>
                            <div className="title">
                                <h2 className='infoSubtitle'>Sub-Title:</h2>
                                <p className='subData'></p>
                            </div>
                            <div className="title">
                                <h2 className='infoDescr'>Description:</h2>
                                <p className='descrData'></p>
                            </div>
                            <input type="hidden" className='hidenId' />
                        </div>
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
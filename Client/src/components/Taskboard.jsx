import React from 'react';
import "./ComponentStyle/Taskboard.css";

const Taskboard = () => {

    //handle hiden button__________________________
    const hidenBtnHandler = ()=>{
        const hidenBtn = document.querySelector(".hidenWindow");
        const createBtn = document.querySelector(".btnDiv button");
        hidenBtn.style.display = "flex"; 
        createBtn.style.cursor = "not-allowed";
    }     

    //handle hiden closing button__________________________
    const hidenClsHandler = ()=>{
        const hidenBtn = document.querySelector(".hidenWindow");
        const createBtn = document.querySelector(".btnDiv button");
        hidenBtn.style.display = "none"; 
        createBtn.style.cursor = "pointer";
    }       

    return (
        <div className='Task-container'>
            <div className="Sidebar">
                <div className="innerSide">
                    <div className="btnDiv">
                        <button onClick={hidenBtnHandler}>+ Create New</button>
                    </div>
                </div>
            </div>
            <div className="View-Task">
                <div className="Sub-view">

                </div>
            </div>

            {/* Hidden window_________________________ */}

            <div className="hidenWindow">
                <div className="clsBtn" onClick={hidenClsHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div className="TitleHead">
                    <p>Create New Task</p>
                </div>
                <div className="formBox">
                    <form action="">
                        <div>
                            <label htmlFor="Title">Title</label>
                            <input type="text" placeholder='Task Title' />
                        </div>

                        <div>
                            <label htmlFor="Sub-Title">Subtitle</label>
                            <input type="text" placeholder='Task Title' />
                        </div>

                        <div>
                            <label htmlFor="Description">Task-Description</label>
                            <textarea
                                id="Description"
                                placeholder="Write task description..."
                            ></textarea>
                        </div>  

                        <button type='submit'>Add Task</button>
                    </form>
                </div>
            </div>
        </div>  
    );
};

export default Taskboard;
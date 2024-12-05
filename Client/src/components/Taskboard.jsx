import React from 'react';
import "./ComponentStyle/Taskboard.css";

const Taskboard = () => {

    //handle hiden button__________________________
    const hidenBtnHandler = ()=>{
        const hidenBtn = document.querySelector(".hidenWindow");
        hidenBtn.style.display = "block";
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
                    my task
                </div>
            </div>

            {/* Hidden window_________________________ */}

            <div className="hidenWindow">
                f
            </div>
        </div>
    );
};

export default Taskboard;
import React, { useState, useEffect } from 'react';
import "./ComponentStyle/Taskboard.css";

const Taskboard = () => {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending'); // default status
    const [editingTaskIndex, setEditingTaskIndex] = useState(null); // Track the task being edited

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    const handleAddTask = () => {
        const newTask = { title, description, status };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to localStorage
        resetModal();
    };

    const handleEditTask = () => {
        const updatedTasks = tasks.map((task, index) => (
            index === editingTaskIndex ? { title, description, status } : task
        ));
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        resetModal();
    };

    const resetModal = () => {
        setTitle('');
        setDescription('');
        setStatus('Pending');
        setEditingTaskIndex(null);
        setIsModalOpen(false);
    };

    const handleOpenEditModal = (task, index) => {
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
        setEditingTaskIndex(index);
        setIsModalOpen(true);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Function to get status color
    const getStatusStyle = (status) => {
        switch (status) {
            case 'Pending':
                return { titleColor: 'yellow', dotColor: 'yellow' };
            case 'In Progress':
                return { titleColor: 'cyan', dotColor: 'cyan' };
            case 'Completed':
                return { titleColor: 'lightgreen', dotColor: 'lightgreen' };
            default:
                return { titleColor: 'black', dotColor: 'gray' };
        }
    };

    return (
        <>
            <div className="taskboard">
                <div className="taskboard-header">
                    <button className="add-task-button" onClick={() => setIsModalOpen(true)}>
                        +
                    </button>
                </div>
                <div className="task-list">
                    {tasks.map((task, index) => {
                        const { titleColor, dotColor } = getStatusStyle(task.status);
                        return (
                            <div key={index} className="task-item" onClick={() => handleOpenEditModal(task, index)}>
                                <h4 className="h4-title" style={{ color: titleColor }}>{task.title}</h4>
                                <p className="des">{task.description}</p>
                                <p className="p-dot">
                                    <span 
                                        className="status-dot" 
                                        style={{ backgroundColor: dotColor }} 
                                    ></span>
                                    Status: {task.status}
                                </p>
                                <button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteTask(index); }}>
                                    Delete
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2 className="h2-title">{editingTaskIndex !== null ? "Edit Task" : "Create New Task"}</h2>
                        <input 
                            type="text" 
                            placeholder="Title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                        <textarea 
                            placeholder="Description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                        <select className="custom-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button className="button-17" role="button" onClick={editingTaskIndex !== null ? handleEditTask : handleAddTask}>
                            {editingTaskIndex !== null ? "Update" : "Create"}
                        </button>
                        <button className="button-17" role="button" onClick={resetModal}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Taskboard;

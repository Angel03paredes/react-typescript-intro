import React,{useState,FormEvent, ChangeEvent} from "react";
import {Task} from "../models/Task";

interface Props{
    addNewTask: (task:Task)=>void
}

export function TaskForm({addNewTask}:Props){
    const initialState = {title:"",description:""}
    const [task,setTask] = useState<Task>(initialState);

    const handleInputChange = ({target:{name,value}}:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>
        setTask({...task,[name]:value})

    const handleForm =(e:ChangeEvent<HTMLFormElement>):any=>{
        e.preventDefault()
        addNewTask(task);
        setTask(initialState)
    }
    
    return (
        <>
            <h2>Agrgar Task</h2>
            <form onSubmit={handleForm}>
                <div className="mb-2">
                    <input type="text" onChange={handleInputChange} value={task.title} name="title" className="form-control" placeholder="Escribe tu titulo..." />
                </div>
                <div className="mb-2">
                <textarea name="description" onChange={handleInputChange} value={task.description} className="form-control" placeholder="Escribe tu description" />
                </div>
                <input type="submit" value="Agregar" className="btn btn-success" />
            </form>
        </>
    )
}
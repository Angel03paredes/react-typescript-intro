import React from "react";
import { Task } from "../models/Task";

interface Props{
    taskList:Task[],
    deleteTask:(id:string)=>void
}

const TaskList = ({taskList,deleteTask}:Props)=>{
    return(
        <>
            {taskList.map((element:Task)=>(
                <div className="col-md-4 mt-2">
                <div key={element.id} className="card card-body bg-secondary rounded-0">
                <h3>{element.title}</h3>
                <p>{element.description}</p>
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => deleteTask(element.id!)}
                >
                  Delete
                </button>
              </div>
              </div>
            ))}
        </>
    )
}

export default TaskList;
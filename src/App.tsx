import React, { useState } from 'react';
import {v4} from 'uuid'
import logo from './logo.svg';
import './App.css';
import {Nav} from './components/Nav'
import { Task } from './models/Task';
import { TaskForm } from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
 const [tasks, setTasks] = useState<Task[]>([])
  const addANewTask = (task: Task): void =>
  {
    console.log(task);
    setTasks([
      ...tasks,
      { ...task, done: false, id: v4() },
    ]);
    console.log(tasks);
  }
  const deleteATask = (id: string): void =>
    setTasks(tasks.filter((task) => task.id !== id));
  return (
   <>
    <Nav></Nav>
    <div className="row">
      <div className="col-md-4 p-5">
        <div className="container">
        <TaskForm addNewTask={addANewTask}></TaskForm>
        </div>  
      </div>
      <div className="col-md-8">
      <div className="row p-5">
              <h6 className="text-primary d-flex justify-content-end">
                Total Tasks <span className="badge bg-primary ms-2">{tasks.length}</span>
              </h6>

              <TaskList taskList={tasks} deleteTask={deleteATask}></TaskList>
            </div>
     
      </div>
    </div>
   </>
  );
}

export default App;

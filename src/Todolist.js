import React, { useState } from 'react';
import Tasks from './Tasks';
import Input from './Input';

function Todolist()  {
    //define state
    let [tasks, setTasks] = useState(['make a todo list']);
    // write addTask handler that adds a task to my task array
    let addTask = (e, newTask) => {
        e.preventDefault();
        setTasks([...tasks, newTask]);
    }

    // define my removeTask handler here
    let removeTask = (e, index) => {
        setTasks(tasks.filter((task, i) => index !==i))
    }
    //index => {
    //     let newTaskArray = tasks.filter((task, i) => {
    //         if (index === i) {
    //             return false
    //         } else {
    //             return true
    //         }
    //     });
    //     setTasks(newTaskArray);
    // }
    return (
        <div>
            <Input onClick={addTask} />
            <Tasks tasks={tasks} removeTask={removeTask}/>
        </div>
    )

}

export default Todolist;
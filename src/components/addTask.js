import React, { useState } from 'react';
import { Tasks } from './task';

function AddTasks(){
    const [newTask, setNewTask] = useState(Task);
    const taskAdded = () =>{
        setNewTask([...Tasks,newTask])
    }
}
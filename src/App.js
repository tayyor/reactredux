import logo from './logo.svg';
import './App.css';

import { Tasks } from './components/task.js';
import  ListTasks from './components/listTask.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tasks</h1>
      </header>
     
      {
        Tasks.map((list,key) =>(
          <ListTasks
            list ={list}
            key = {key} />
        ))
      }

    </div>
  );
}

export default App;

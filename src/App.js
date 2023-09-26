
import './App.css';
import {useState} from "react";

function App() {
  const [tinput,setTask]=useState("");
  const [list,setList]=useState([]);

  const handle_input=(event)=>{
        setTask(event.target.value);
  }
  const add = (event)=>{
    let task={name:tinput, id: list.length===0?1:list[list.length-1].id+1};
    setList([...list ,task]);
    console.log('task added');
  }
  const remove =(id)=>{
    setList(list.filter( (task_iter)=>( id!==task_iter.id)));
    console.log('task removed');
  }
  return (
    <div className="App">
        <div className="header">
        To_do Lists
        </div>
      
         <div className="body">  
            <input placeholder='mention your tasks..'  class="remove_entering" type="text"  onChange={handle_input} />
            <button className='add' onClick={add}>add</button>
              
            <div className="subsection">  
             {
               list.map( (task)=>(<div key={task.id}> <li>{task.name}  <button  className="remove" onClick={()=>remove(task.id)}> X </button> </li> </div> ))
             }       
             </div>
         </div>   
    </div>
  );
}

export default App;

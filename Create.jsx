import React,{ useState } from 'react';
import axios from 'axios';

function Create() {
    
  const [task, setTask] = useState();
  
  const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task : task })
        .then(result =>  console.log(result))
        .catch(err =>  console.log(err))
    }


  return (
    <div>
        <form className="create_form">
            <input type="text" placeholder="Enter a new todo..." onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={handleAdd}> Add Todo </button>
        </form>
    </div>
  )
}

export default Create
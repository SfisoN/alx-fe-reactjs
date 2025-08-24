import React, {useState} from 'react';

function AddTodoForm({onAdd}) {

    const [text, setText] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            onAdd(text);
            setText("");

        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Add todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add</button>
      
    </form>
  );
}

export default AddTodoForm
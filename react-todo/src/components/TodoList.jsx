import React, {useState} from 'react'

export function ToDoForm({onAdd}) {

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





function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: "Learn Native React"},
        {id: 2, text: "Build a Todo App"},
        {id: 3, text: "Master Java"},
    ]);

    const addTodo = (text) => {
        setTodos([...todos, {id: Date.now(), text, completed: false}]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

  return (
    <div>
      <h1>Todo List</h1>
      <ToDoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
            <li 
            key={todo.id} 
            data-testid="todo-item"
            onClick={() => toggleTodo(todo.id)}
            style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                <span onClick={() => toggleTodo(todo.id)} style={{cursor: "pointer"}}>
                    {todo.text}
                </span>
                <button data-testid="delete-btn" onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                }}
                style={{marginLeft: "10px"}}>
                    Delete
                </button>
            </li>
        ))}
      </ul>
    </div>
  );
}



export default TodoList

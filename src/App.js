import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import AddInput from './components/AddInput/AddInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [data, setData] = useState({});
  useEffect(async () => {
    const response = await fetch('http://localhost:8000/todos');
    const json = await response.json();
    setData(json);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Header title="Todo" />
        <AddInput setTodos={setData} todos={data} />
        {data.length > 0 ? (
          <TodoList todos={data} setTodos={setData} />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import propTypes from 'prop-types';
import './TodoList.css';

function TodoList({ todos, setTodos }) {
  const updateTask = (id) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        const task = todo;
        task.completed = !task.completed;
        return task;
      }
      return todo;
    });
    setTodos(updatedTasks);
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <div
                key={todo.id}
                className={`todo-item ${todo.completed && 'todo-item-active'}`}
                onClick={() => updateTask(todo.id)}
                onKeyUp={({ target }) => target.key('enter')}
                role="button"
                tabIndex={index}
              >
                {todo.task}
              </div>
            ))
          ) : (
            <h3>Wait ...</h3>
          )}
        </div>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todos: propTypes.objectOf.isRequired,
  setTodos: propTypes.func.isRequired,
};

export default TodoList;

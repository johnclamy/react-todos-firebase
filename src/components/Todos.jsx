import { List } from '../assets/styles/List.styled'
import Todo from './Todo'
import { saveAndRender } from '../helper'

const Todos = ({ todos = [], onSetTodos = f => f }) => {
  const handleToggleCheckedState = id => {
    const list = todos.map(
      todo => todo.id === id
        ? { ...todo, checked: !todo.checked }
        : todo
    )
    saveAndRender(onSetTodos, 'todos', list)
  }

  const handleDeleteButtonClick = id => {
    saveAndRender(
      onSetTodos,
      "todos",
      todos.filter((todo) => todo.id !== id)
    );
  };

  const todoList = todos.length ? (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleCheckedState={handleToggleCheckedState}
          onDeleteButtonClick={handleDeleteButtonClick}
        />
      ))}
    </List>
  ) : (
    <p>You do not have any todos...</p>
  );

  return todoList
}

export default Todos
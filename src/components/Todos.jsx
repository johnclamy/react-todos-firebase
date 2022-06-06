import { List } from '../assets/styles/List.styled'
import Todo from './Todo'

const Todos = ({ todos = [], onSetTodos = f => f }) => {
  const handleToggleCheckedState = id => {
    const list = todos.map(
      todo => todo.id === id
        ? { ...todo, checked: !todo.checked }
        : todo
    )
    onSetTodos(list)
  }

  const handleDeleteButtonClick = id => {
    const list = todos.filter(todo => todo.id !== id)
    onSetTodos(list)
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
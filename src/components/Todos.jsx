import { List } from '../assets/styles/List.styled'
import { Alert } from '../assets/styles/Alert.styled'
import Title from './Title'
import Todo from './Todo'

const Todos = ({ todos = [], onSetTodos = (f) => f }) => {
  const handleToggleCheckedState = (id) => {
    const list = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    onSetTodos(list)
  };

  const handleDeleteButtonClick = (id) => {
    onSetTodos(todos.filter((todo) => todo.id !== id));
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
    <Alert>
      <p>You do not have any todos</p>
    </Alert>
  );

  return (
    <>
      <Title title="todo list" />
      {todoList}
    </>
  );
};

export default Todos
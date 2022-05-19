import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';
import actionType from '../app/action-type'

const TodoList = ({ todos, dispatch }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeItem={() => dispatch({ type: actionType.REMOVE, id: todo.id })}
          editItem={text => dispatch({ type: actionType.EDIT, id: todo.id, text })}
        />
      ))}
    </ListGroup>
  );
}

export default TodoList
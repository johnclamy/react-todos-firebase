import { List } from '../assets/styles/List.styled'
import Todo from './Todo'

const Todos = ({ todos = [], onSetTodos = f => f }) => {
  const todoList = todos.length
    ? (
      <List>
        {todos.map(todo =>
          <Todo key={todo.id} todo={todo} />
        )}
      </List>
    ) : (
      <p>You do not have any todos...</p>
    )
  return todoList
}

export default Todos
import { useReducer } from 'react'
import { Alert, Container, Row, Col } from 'react-bootstrap'
import AppHeader from './components/AppHeader'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import initState from './app/data'
import reducer from './app/reducer'
import actionType from './app/action-type'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { todos } = state

  const todoList = !todos.length
    ? <Alert className='text-center lead' variant='info'>You have no todos.</Alert>
    : <TodoList todos={todos} dispatch={dispatch} />
  
	return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <AppHeader />
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <AddTodoForm onAdd={text =>
                dispatch({ type: actionType.ADD, text })
              } />
            </Col>
          </Row>
          <div className="my-4">
            <h1 className="h4 mb-3 pb-1 text-secondary text-uppercase border-0 border-bottom border-info border-3">
              todos list
            </h1>
            {todoList}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
import { useState } from 'react'
import { Button, Form, ListGroup } from "react-bootstrap";

const TodoItem = ({ todo, removeItem, editItem }) => {
  const MODES = ['listItem', 'editItem']
  const [mode, setMode] = useState(MODES[0])
  const [text, setText] = useState(todo.text)

  const handleEditToSaveClick = () => {
    editItem(text)
    setMode(MODES[0])
  }

  const renderMode =
    mode === MODES[0] ? (
      <div className="d-flex justify-content-between align-items-center">
        <span>{todo.text}</span>
        <div>
          <Button variant="danger" onClick={removeItem}>
            Remove
          </Button>
          <Button
            className="ms-2"
            variant="warning"
            onClick={() => setMode(MODES[1])}
          >
            Edit
          </Button>
        </div>
      </div>
    ) : (
      <div>
        <Form>
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form>
        <div>
          <Button className='me-2' variant="dark" onClick={handleEditToSaveClick}>
            Save
          </Button>
          <Button
            className="ml-2"
            variant="secondary"
            onClick={() => setMode(MODES[0])}
          >
            Cancel
          </Button>
        </div>
      </div>
    );

  return (
    <ListGroup.Item className="border-info">
      {renderMode}
    </ListGroup.Item>
  );
}

export default TodoItem
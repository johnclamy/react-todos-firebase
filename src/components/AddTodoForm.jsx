import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleClick = () => {
    onAdd(text)
    setText('')
  }

  return (
    <Form className='mb-4'>
      <Form.Group>
        <Form.Label>Enter a todo:</Form.Label>
        <Form.Control
          className='mb-2'
          size="lg"
          type="text"
          value={text}
          placeholder="What to do next..."
          onChange={e => setText(e.target.value)}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button
          variant="info"
          className="text-uppercase"
          onClick={handleClick}
        >
          add todo
        </Button>
      </div>
    </Form>
  );
}

export default AddTodoForm
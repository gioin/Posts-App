import { useAppContext } from '../helper/Context';
import { Button, Form, Modal } from 'react-bootstrap';
import { entrieMyForm } from '../types';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = ({ inputRef }: entrieMyForm) => {
  const { input, handleSubmit, handleInputChange } = useAppContext();

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          name="title"
          value={input.title}
          onChange={e => handleInputChange(e)}
          type="text"
          placeholder="Title"
          ref={inputRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          name="body"
          value={input.body}
          onChange={e => handleInputChange(e)}
          placeholder="What do yo think?"
          as="textarea"
          rows={3}
          required
        />
      </Form.Group>
      <Modal.Footer className="border-0 p-0">
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default MyForm;

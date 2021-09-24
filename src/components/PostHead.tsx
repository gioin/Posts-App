import React, { useEffect, useRef } from 'react';
import { Modal, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './MyForm';
import { useAppContext } from '../helper/Context';

const PostHead = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { setShow, show, setFormState, input } = useAppContext();

  useEffect(() => {
    // focus on title input as modal open
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [show]);

  const handleShowModal = () => {
    setShow(true);
    setFormState('add');
    input.body = '';
    input.title = '';
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <Card className="mb-2 p-2">
      <Card.Body className="d-flex justify-content-center align-items-center">
        <div className="user border rounded-circle "></div>
        <button
          onClick={handleShowModal}
          className="write-btn border rounded"
          style={{ width: '80%' }}>
          What do you think?
        </button>
      </Card.Body>

      <Modal
        show={show}
        onHide={handleCloseModal}
        animation={false}
        scrollable={false}>
        <Modal.Header closeButton>
          <Modal.Title>Post something</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm inputRef={inputRef} />
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default PostHead;

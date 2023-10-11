import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const EditTodo = ({ todo, getTodos }) => {
  const [descriptiontest, setDescription] = useState(todo.description);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditTodo = async () => {
    try {
      const body = { description: descriptiontest };
      console.log("bodyyyy", body);
      const response = await fetch(
        `http://localhost:5000/todos/update/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      getTodos();
      handleClose();
    } catch (err) {
      console.error(err.message);
    }
  };

  //useRef for textarea

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal.Title className="ms-auto">Edit Todos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={todo.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => setDescription(todo.description)}
          >
            Close
          </Button>
          <Button variant="dark" onClick={() => handleEditTodo()}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
EditTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired,
};

export default EditTodo;

import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  //get todos
  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/");
      const jsonData = await res.json(); //(.json()) convert JSON=====>js bject
      setTodos(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  //delete function
  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      console.log("deleted todo", deletedTodo);
      //   getTodos();
    } catch (error) {
      console.error(error);
    }
  };

  //   console.log("todos",todos)
  useEffect(() => {
    getTodos();
  }, [todos]);
  return (
    <div className="p-5  d-flex justify-content-center">
      <Table striped bordered hover style={{ width: "60%" }}>
        <thead>
          <tr >
            <th>Description</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} id={todo.todo_id} key={todo.todo_id} getTodos={getTodos}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
//use parentheses in map for a concise return
export default ListTodos;

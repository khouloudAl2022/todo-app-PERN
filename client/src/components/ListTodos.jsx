import React from "react";
import Table from "react-bootstrap/Table";

const ListTodos = () => {
  return (
    <div className="p-5  d-flex justify-content-center">
      <Table striped bordered hover style={{ width: "60%" }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </Table>{" "}
    </div>
  );
};

export default ListTodos;

import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

const ListTodos = () => {
  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/");
      const jsonData = await res.json(); //(.json()) convert JSON=====>js bject
      console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
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
          <tr></tr>
          <tr></tr>
        </tbody>
      </Table>{" "}
    </div>
  );
};

export default ListTodos;

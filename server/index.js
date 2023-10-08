const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());
//routes//
//create todo

app.post("/todos", async (req, res) => {
  const { description } = req.body;
  const newTodo = await pool.query(
    "INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]
  );
  try {
    console.log(req.body);
    res.json(newTodo.rows);
  } catch (error) {
    console.error(error);
  }
});

//get all todos
app.get("/", async (req, res) => {
  try {
    const alltodos = await pool.query("SELECT * FROM todo");
    res.json(alltodos.rows);
  } catch (error) {
    console.error(error);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log("params", req.params);
    const todo = await pool.query("SELECT * FROM TODO WHere todo_id=$1", [id]);
    res.send(todo.rows);
    console.log(req.params);
  } catch (error) {
    console.error(error);
  }
});
//update a todo
app.put("/todos/update/:id", async (req, res) => {
  const { description } = req.body;
  const { id } = req.params;
  try {
    const updatedTodo = await pool.query(
      "UPDATE todo SET description =$1 WHERE todo_id=$2",
      [description, id]
    );
    res.send("todo was updated");
  } catch (error) {
    console.error(error);
  }
});
//delete todo

app.listen(5000, () => {
  console.log("server has started on port 500");
});

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
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

//get all todos


//get a todo
//update a todo
//delete todo

app.listen(5000, () => {
  console.log("server has started on port 500");
});

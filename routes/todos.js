import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//remove the string jadi variabel kl disini, as mock database
const todos = [];

//all routes in here are starting with /todos
router.get("/", (req, res) => {
  //   console.log(todos);
  res.send(todos);
});

//user send data from app to the server that data being the values in the form todos
//from the client to the server, for the user to be created "as todo list"

router.post("/", (req, res) => {
  const todo = req.body;
  todos.push({ ...todo, Id: uuidv4() });
  res.send(`Agenda ${todo.name} masuk ke dalam database`);
});

//retrieve the value of id using callback funtion?
router.get("/:id", (req, res) => {
  res.send("THE FET ID ROUTE");
});

export default router;

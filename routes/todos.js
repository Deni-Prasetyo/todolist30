import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//remove the string jadi variabel kl disini, as mock database
let todos = [];

//user send data from app to the server that data being the values in the form todos
//from the client to the server, for the user to be created "as todo list"

router.post("/", (req, res) => {
  const { text, done } = req.body;
  const id = Math.floor(Math.random() * 100);
  todos.rows.push({
    id: id,
    text: text,
    done: done,
  });
  res.send({
    id: id,
    success: true,
  });
});

//retrieve the value of id using callback function?
router.get("/", (req, res) => {
  res.send(todos);
});

//menghapus nama Agenda dengan spesific id atau logic nya; id nya 'g sama' dengan dia 'name' dibiarin, tetep di array.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.rows.findIndex((x) => x.id === parseInt(id));
  todos.rows.splice(index, 1);

  res.send({
    id: id,
    delete: true,
  });
});

export default router;

import express from "express";
import bodyParser from "body-parser";

import todosRoutes from "./routes/todos.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/todos", todosRoutes);

app.get("/", (req, res) => {
  console.log("[COBA]!");

  res.send("Hello WORLD!!");
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// const app = express();
// const port = 3000;

// import todosRoutes from "./routes/todos.js";

// //middleware untuk body, parse ke JSON dulu
// app.use(express.json());

// app.use("/todos", todosRoutes);

// app.get("/", (req, res) => {
//   // res.send("Hello World!");
//   console.log(req);
// });

// // ini dipisah beda folder?
// let todos = {
//   name: "todos",
//   rows: [
//     {
//       id: 1,
//       name: "today",
//       done: true,
//     },
//   ],
// };

// //CREATE to do, method harus post kalau ada body
// app.post("/todos", (req, res) => {
//   console.log(req.body);
//   const { text, done } = req.body;
//   const id = Math.floor(Math.random() * 100);
//   todos.rows.push({
//     id: id,
//     text: text,
//     done: done,
//   });
//   res.send({
//     id: id,
//     success: true,
//   });
// });

// app.get("/todos", (req, res) => {
//   res.send(todos.rows);
// });

// app.delete("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const index = todos.rows.findIndex((x) => x.id === parseInt(id));
//   todos.rows.splice(index, 1);

//   res.send({
//     id: id,
//     delete: true,
//   });
// });

// app.listen(port, () => {
//   console.log(`Listening on port http://localhost:${port}`);
// });

import express from "express";

import todosRoutes from "./routes/todos.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/todos", todosRoutes);

app.get("/", (req, res) => {
  res.send("Build API!!");
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

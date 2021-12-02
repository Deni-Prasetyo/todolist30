import express from "express";

const router = express.Router();

//remove the string jadi variabel kl disini, as mock database
const todos = [
  {
    name: "Bangun Pagi",
    rows: [
      {
        id: 1,
        name: "today",
        done: true,
      },
    ],
  },
];

//all routes in here are starting with /todos
router.get("/", (req, res) => {
  console.log(todos);
  res.send(todos);
});

//user send data from app to the server that data being the values in the form todos
//from the client to the server, for the user to be created "as todo list"

router.post("/", (req, res) => {
  console.log("POST ROUTE REACHED");
  console.log(req.body);
  res.send("POST ROUTE REACHED");
});
export default router;

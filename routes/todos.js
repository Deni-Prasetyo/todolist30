import express from "express";
import { postNote, getNote, deleteNote } from "../controllers/todos.js";

const router = express.Router();

router.post("/", postNote);

router.get("/", getNote);

router.delete("/:id", deleteNote);

export default router;

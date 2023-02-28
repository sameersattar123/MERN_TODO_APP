import express from "express"
import { addTodo , getAllTodos , toggleTodoDone , UpdateTodo , DeleteTodo } from "../Controllers/Todo_Controllers.js";

const route = express.Router()

route.post("/todos" , addTodo)
route.get("/todos" , getAllTodos)
route.get("/todos/:id" , toggleTodoDone)
route.put("/todos/:id" , UpdateTodo)
route.delete("/todos/:id" , DeleteTodo)

export default route;     
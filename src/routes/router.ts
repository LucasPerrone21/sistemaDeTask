import {Router} from "express";
import { CreateTaskController } from "../controllers/CreateTaskController";
import { DeleteTaskController } from "../controllers/DeleteTaskController";
import { FindTaskController } from "../controllers/FindTaskController";
import { ListTasksController } from "../controllers/ListTasksController";
import { UpdateTaskController } from "../controllers/UpdateTaskController";

const router = Router();

const createTask = new CreateTaskController();
const findTask = new FindTaskController();
const listTasks = new ListTasksController();
const updateTask = new UpdateTaskController();
const deleteTask = new DeleteTaskController();

router.post("/task", createTask.handle);
router.get("/task/:id", findTask.handle);
router.get("/tasks", listTasks.handle);
router.delete("/task/:id", deleteTask.handle);
router.put("/task/:id", updateTask.handle)

export {router}
import express from "express";
import { TaskController } from "./task.controller";

const router = express.Router();

router.post("/create-task", TaskController.CreateTaskController);
router.get("/", TaskController.GetTaskController);
router.get("/:id", TaskController.GetSingleTaskController);
router.patch("/:id", TaskController.UpdateSingleTaskController);
router.delete("/:id", TaskController.DeleteSingleTaskController);

export const TaskRoutes = router;

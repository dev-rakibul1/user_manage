import { Task } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import CatchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { TaskService } from "./task.services";

// Create a task
const CreateTaskController = CatchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await TaskService.CreateTaskService(payload);

  sendResponse<Task | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task added success!",
    data: result,
  });
});

// Get all task
const GetTaskController = CatchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.GetTaskService();

  sendResponse<Task[] | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task get success!",
    data: result,
  });
});
// Get single task
const GetSingleTaskController = CatchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await TaskService.GetSingleTaskService(id);

    sendResponse<Task | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single task get success!",
      data: result,
    });
  }
);
// update single task
const UpdateSingleTaskController = CatchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;

    const result = await TaskService.UpdateSingleTaskService(id, payload);

    sendResponse<Partial<Task>>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single task update success!",
      data: result,
    });
  }
);

// delete single task
const DeleteSingleTaskController = CatchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await TaskService.DeleteSingleTaskService(id);

    sendResponse<Task>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single task delete success!",
      data: result,
    });
  }
);

export const TaskController = {
  CreateTaskController,
  GetTaskController,
  GetSingleTaskController,
  UpdateSingleTaskController,
  DeleteSingleTaskController,
};

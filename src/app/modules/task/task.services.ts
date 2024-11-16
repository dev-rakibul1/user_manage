import { Task } from "@prisma/client";
import prisma from "../../../shared/prisma";

// Create Task service
const CreateTaskService = async (payloads: Task): Promise<Task | null> => {
  const taskCreate = await prisma.task.create({ data: payloads });
  return taskCreate;
};
// Get all task service
const GetTaskService = async (): Promise<Task[] | null> => {
  const getTask = await prisma.task.findMany({});
  return getTask;
};

// Get single task service
const GetSingleTaskService = async (id: string): Promise<Task | null> => {
  const getTask = await prisma.task.findUnique({ where: { id: id } });

  if (!getTask) {
    throw new Error("Invalid task!");
  }

  return getTask;
};
// Update single task service
const UpdateSingleTaskService = async (
  id: string,
  payloads: Partial<Task>
): Promise<Partial<Task>> => {
  const isExist = await prisma.task.findUnique({ where: { id: id } });
  if (!isExist) {
    throw new Error("Invalid task!");
  }

  const result = await prisma.task.update({
    where: { id: id },
    data: payloads,
  });

  return result;
};
// delete single task service
const DeleteSingleTaskService = async (id: string): Promise<Task> => {
  const isExist = await prisma.task.findUnique({ where: { id: id } });
  if (!isExist) {
    throw new Error("Invalid task!");
  }

  const result = await prisma.task.delete({
    where: { id: id },
  });

  return result;
};

export const TaskService = {
  CreateTaskService,
  GetTaskService,
  GetSingleTaskService,
  UpdateSingleTaskService,
  DeleteSingleTaskService,
};

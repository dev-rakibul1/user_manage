import express from "express";

import { TaskRoutes } from "../modules/task/task.route";

const router = express.Router();

const modulesRouters = [
  {
    path: "/task",
    route: TaskRoutes,
  },
];

modulesRouters.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

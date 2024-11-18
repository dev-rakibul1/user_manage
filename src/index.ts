import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";

import router from "./app/routes/app.route";
import { databaseConnect } from "./utils/server";

export const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Application router or Application middleware
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Congratulations from our server",
  });
});

/**
 * GLOBAL ERROR HANDLING AND PRODUCTION LABEL
 */
// app.use(GlobalErrorHandler)

// global error handling
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Sorry! Not found.",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "API not found!",
      },
    ],
  });
  next();
});

app.listen(1000, () => {
  console.log("Server is running now");
});

export default app;

databaseConnect();

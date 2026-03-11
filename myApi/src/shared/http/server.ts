import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes";
import { AppError } from "@shared/erros/AppError";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) => {
    if (error instanceof AppError) {
      const isInternalError = error.statusCode === 500;

      return response.status(error.statusCode).json({
        status: "error",
        message: isInternalError ? "Internal server error" : error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  },
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});

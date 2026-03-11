import { AppError } from "@shared/erros/AppError";
import { Router } from "express";
import { rolesRouter } from "@roles/http/routes/roles.routes";

const routes = Router();

routes.get("/", (request, response) => {
  return response.status(200).json({});
});

routes.use("/roles", rolesRouter);

export { routes };

import { Router } from "express";
import { v4 as uuid } from "uuid";
const rolesRouter = Router();

const roles = [];

rolesRouter.post("/", (request, response) => {
  const { name } = request.body;

  const id = uuid();

  const role = {
    id: uuid(),
    name,
    created_at: new Date(),
  };

  roles.push(role);

  return response.status(201).json(role);
});

export { rolesRouter };

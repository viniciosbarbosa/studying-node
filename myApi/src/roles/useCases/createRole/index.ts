import { RolesRepository } from "@roles/repositories/RolesRepository";
import { CreateRoleUseCase } from "./CreateRoleUseCase";
import { CreateRoleController } from "./CreateRoleController";

export const rolesResposity = new RolesRepository();
const createRoleUseCase = new CreateRoleUseCase(rolesResposity);
export const createRolesController = new CreateRoleController(
  createRoleUseCase,
);

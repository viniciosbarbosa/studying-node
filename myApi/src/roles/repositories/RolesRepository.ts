import { Role } from "@roles/entities/Role";

type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  private roles: Role[];
  private static instance: RolesRepository;

  private constructor() {
    this.roles = [];
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.instance) {
      RolesRepository.instance = new RolesRepository();
    }
    return RolesRepository.instance;
  }

  create({ name }: CreateRoleDTO) {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);

    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }

  findByName(name: string): Role | undefined {
    const role = this.roles.find((role) => role.name === name);
    return role;
  }
}

import { EntityMeta } from "./entity";

export interface NewUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

// export type NewUser = Omit<User, "id" | "createdAt" | "updatedAt">;

export type User = NewUser & EntityMeta;

export type LoginUser = Omit<NewUser, "first_name" | "last_name">;

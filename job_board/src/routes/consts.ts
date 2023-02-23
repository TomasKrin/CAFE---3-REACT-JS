import Jobs from "../pages/Jobs/Jobs";
import Users from "../pages/Users/Users";
import { RouteTypes } from "../types/routes";

export const JOBS_PATH = "/";
export const USERS_PATH = "/users";

export const routes: RouteTypes[] = [
  {
    path: JOBS_PATH,
    Component: Jobs,
  },
  {
    path: USERS_PATH,
    Component: Users,
  },
];

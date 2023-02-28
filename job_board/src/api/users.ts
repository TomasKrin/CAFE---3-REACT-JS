import axios, { AxiosResponse } from "axios";
import { User, LoginUser, NewUser } from "../types/user";

const USERS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/user";

interface UsersResponse {
  data: User[];
}

export const fetchUsers = (): Promise<User[]> => {
  return axios
    .get<UsersResponse>(USERS_API_URL)
    .then((response: AxiosResponse<UsersResponse>) => response.data.data);
};

// Aprasyti kurimui skirta tipa Omit<User, laukas>

export const createUser = (user: NewUser): Promise<User> => {
  return axios.post(USERS_API_URL, user).then((response) => response.data);
};

export const loginUser = async (loggingUser: LoginUser): Promise<User> => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser;

    const userChecker = (u: User) => u.email === email && u.password === password;

    const existingUser = users.find(userChecker);

    existingUser ? resolve(existingUser) : reject("Invalid credentials");
  });
};

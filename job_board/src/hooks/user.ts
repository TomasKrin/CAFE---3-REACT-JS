import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, loginUser, fetchUsers } from "../api/users";

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};

const USERS = "USERS";

export const useUsers = () => {
  return useQuery([USERS], fetchUsers);
};

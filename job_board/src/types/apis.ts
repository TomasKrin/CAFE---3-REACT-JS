export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface Job {
  title: string;
  description: string;
  price: number;
  type: string;
  starting_from: string;
  drivers_license: boolean;
  user_id: number;
}

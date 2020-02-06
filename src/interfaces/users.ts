export interface User {
  id: string;
  name: string;
  phone: string;
}

export interface UserState {
  list: User[];
}

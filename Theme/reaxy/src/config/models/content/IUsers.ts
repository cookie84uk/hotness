export interface IUser {
  id: number;
  name: string;
  birthday?: string;
  surName: string;
  username: string;
  gender: string;
  email: string;
  position: string;
  phone: string;
  address: string;
  joined: string;
  company: string;
  salary: string;
  registration: string;
  url: string;
  blocked: boolean;
  status: string;
  password: string;
  google: string;
  facebook: string;
  twitter: string;
}

export interface IUserState {
  users: IUser[];
  values: IUser;
  loading: boolean;
  error: boolean;
  edit: boolean;
  block: boolean | null;
  id: string;
  alignment: string;
  alignments: string;
  searchUser: string;
  isOpen: boolean;
}

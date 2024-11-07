export interface ILoginProps {
  isLoading: boolean;
  isLogin: string;
  email: string;
  password: string;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}


export interface ILoginFormInputs {
  email: string;
  password: string;
}

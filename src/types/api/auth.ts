export type UserType = 'employee' | 'employer';

export interface LoginUser {
  id: string;
  email: string;
  type: UserType;
}

export interface LoginResponse {
  item: {
    token: string;
    user: {
      item: LoginUser;
      href: string;
    };
  };
  links: unknown[];
}

export interface SignupReponse {
  item: LoginUser;
  links: unknown[];
}

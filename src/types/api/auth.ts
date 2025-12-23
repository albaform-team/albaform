// 실제 유저 정보
interface UserItem {
  id: string;
  email: string;
  type: 'employer' | 'employee';
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

// user
interface LoginUser {
  item: UserItem;
  href: string;
}

// item
interface LoginItem {
  token: string;
  user: LoginUser;
}

// 로그인 응답 전체
export interface LoginResponse {
  item: LoginItem;
  links: unknown[];
}

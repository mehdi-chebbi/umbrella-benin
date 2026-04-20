export interface AdminUser {
  id: number;
  username: string;
}

export interface LoginResponse {
  token: string;
  user: AdminUser;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

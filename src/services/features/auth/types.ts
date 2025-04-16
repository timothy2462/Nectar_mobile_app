export interface AuthState {
    user: any | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
  }
  
  export interface LoginPayload {
    username: string;
    password: string;
  }

  export interface LoginResponse {
    token : string;
  }
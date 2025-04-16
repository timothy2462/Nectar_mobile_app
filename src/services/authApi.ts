import { postData } from "../utilis/apiClient";
import { LoginPayload, LoginResponse } from "./features/auth/types";
const BASE_URL = "https://fakestoreapi.com";

export const authApi = {
  login: async (credentials: { username: string; password: string }) => {
    return postData<LoginPayload, LoginResponse>(
        `${BASE_URL}/auth/login`,
        credentials
      );  },
  // Add other auth-related endpoints as needed
};
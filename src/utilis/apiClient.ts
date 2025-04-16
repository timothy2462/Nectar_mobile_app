import { getToken, removeToken } from "./storage";

const BASE_URL = "https://fakestoreapi.com";
if (!BASE_URL) throw new Error("EXPO_PUBLIC_BASE_URL is not configured");

interface ApiOptions extends RequestInit {
  body?: any;
}

const apiClient = async <T>(url: string, options: ApiOptions = {}): Promise<T> => {
  const token = await getToken(); 

  const defaultOptions: ApiOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${BASE_URL}${url}`, defaultOptions);

    if (response.status === 401) {
      await removeToken();                    
      throw new Error('Unauthorized. Logging out...');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json() as T;
  } catch (error) {
    console.error(`API Request Failed: ${options.method} ${url}`, error);
    throw error;
  }
};

export const getData = <T>(url: string, options: ApiOptions = {}) =>
  apiClient<T>(url, { method: 'GET', ...options });

export const postData = <T, R>(url: string, data: T, options: ApiOptions = {}) =>
  apiClient<R>(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });

export const deleteData = <R>(url: string, options: ApiOptions = {}) =>
  apiClient<R>(url, { method: 'DELETE', ...options });

export default apiClient;

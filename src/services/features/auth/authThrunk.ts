import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload } from './types';
import { postData } from '@/src/utilis/apiClient';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await postData<LoginPayload, { token: string }>('/auth/login', payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

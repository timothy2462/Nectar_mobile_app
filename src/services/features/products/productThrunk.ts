import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '@/src/utilis/apiClient';
import { Product } from './types';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await getData<Product[]>('/products');
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

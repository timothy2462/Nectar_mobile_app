export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  }
  
  export interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
  }
  
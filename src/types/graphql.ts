// Represents a product
export interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
  // Represents a cart
  export interface Cart {
    id: string;
    userId: string;
    date: string; // Date in ISO format (e.g., "2023-10-01")
    products: Product[];
  }
  
  // Represents a user
  export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    name: string; // User's full name (e.g., "John Doe")
    phone: string;
  }
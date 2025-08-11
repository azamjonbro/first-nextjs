import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
let token = localStorage.getItem('token') || null;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
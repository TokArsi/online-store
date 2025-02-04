import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import data from "./slices/dataSlice.js";

export const store = configureStore({
  reducer: { cart, data },
});

export const useAppDispatch = useDispatch;

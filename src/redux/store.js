import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: { cart },
});

export const useAppDispatch = useDispatch;

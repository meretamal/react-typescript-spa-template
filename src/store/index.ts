import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/api/base.api';
import { reducer } from './modules';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

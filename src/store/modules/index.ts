import { combineReducers } from 'redux';
import { baseApi } from '@/api/base.api';
import { reducer as example } from './example/example.slice';

export const rootReducer = combineReducers({
  example,
  [baseApi.reducerPath]: baseApi.reducer,
});

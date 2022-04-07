import { combineReducers } from 'redux';
import { baseApi } from '@/api/base.api';
import { reducer as example } from './example/example.slice';

export const reducer = combineReducers({
  example,
  [baseApi.reducerPath]: baseApi.reducer,
});

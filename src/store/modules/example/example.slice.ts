import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExampleState {
  foo: string;
}

const initialState: ExampleState = {
  foo: '',
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setFoo: (state, action: PayloadAction<string>) => {
      state.foo = action.payload;
    },
  },
});

export const { setFoo } = exampleSlice.actions;

export const { reducer } = exampleSlice;

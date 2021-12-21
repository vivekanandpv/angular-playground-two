import { createAction, createReducer, on } from '@ngrx/store';

export const increment = createAction('[Increment]');

export const decrement = createAction('[Decrement]');

const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ++state),
  on(decrement, (state) => --state)
);

export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action);
};

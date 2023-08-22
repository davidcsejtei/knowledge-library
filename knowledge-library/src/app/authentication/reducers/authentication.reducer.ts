import { createReducer, on } from '@ngrx/store';
import { setToken } from '../actions/authentication.actions';

export interface AppState {
  authentication: State;
}

export interface State {
  token: string;
}

const initialState: State = { token: '' };

export const authenticationReducer = createReducer(
  initialState,
  on(setToken, (state: State, { token: string }) => ({
    ...state,
    token: string,
  }))
);

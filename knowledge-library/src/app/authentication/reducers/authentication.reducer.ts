import { createReducer, on } from '@ngrx/store';
import { setToken } from '../actions/authentication.actions';

export interface AuthenticationState {
  token: string;
}

const initialState: AuthenticationState = { token: '' };

export const authenticationReducer = createReducer(
  initialState,
  on(setToken, (state: AuthenticationState, { token: string }) => ({
    ...state,
    token: string,
  }))
);

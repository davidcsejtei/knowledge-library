import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/authentication.reducer';

export const authenticationFeatureKey = 'authentication';

export const selectToken = createFeatureSelector<State>(
  authenticationFeatureKey
);

export const selectTokenA = createSelector(
  selectToken,
  (state: State) => state.token
);

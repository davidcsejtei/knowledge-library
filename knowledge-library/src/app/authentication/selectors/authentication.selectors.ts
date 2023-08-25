import { createFeatureSelector, createSelector } from '@ngrx/store';

// // AppState
// {
//   ...
//   // UserState
//   user: {
//     token: "1213"
//   }
// }

export interface UserState {
  token: string;
}

export const userFeature = createFeatureSelector<UserState>('user');

export const selectUserToken = createSelector(
  userFeature,
  (state: UserState) => state.token
);

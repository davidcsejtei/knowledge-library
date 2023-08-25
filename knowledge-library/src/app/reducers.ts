import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authenticationReducer } from './authentication/reducers/authentication.reducer';
import { categoriesReducer } from './categories/reducers/category.reducers';
import { AppState } from './app.module';
import { localStorageSync } from 'ngrx-store-localstorage';

export const reducers: ActionReducerMap<AppState> = {
  user: authenticationReducer,
  categories: categoriesReducer,
};

export const metaReducers: Array<MetaReducer<AppState, any>> = [
  localStorageSyncReducer,
];

export function localStorageSyncReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return localStorageSync({
    keys: ['user', 'categories'],
    rehydrate: true,
  })(reducer);
}

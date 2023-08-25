import { createReducer } from '@ngrx/store';
import { CategoriesFeatureState } from '../selectors/category.selectors';

const initialState: CategoriesFeatureState = {
  all: [],
};

export const categoriesReducer = createReducer(initialState);

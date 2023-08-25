import { createReducer, on } from '@ngrx/store';
import { CategoriesFeatureState } from '../selectors/category.selectors';
import { loadCategories } from '../actions/category.actions';

const initialState: CategoriesFeatureState = {
  all: [],
};

export const categoriesReducer = createReducer(
  initialState,
  on(loadCategories, (state, { categories }) => {
    return {
      ...state,
      all: categories,
    };
  })
);

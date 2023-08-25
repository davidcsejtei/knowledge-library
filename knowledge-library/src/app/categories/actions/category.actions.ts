import { createAction, props } from '@ngrx/store';
import { Category } from '../selectors/category.selectors';

export const LOAD_CATEGORIES = '[Category] Load Categories';
export const LOAD_CATEGORIES_ERROR = '[Category] Load Categories Error';

export const loadCategories = createAction(
  LOAD_CATEGORIES,
  props<{ categories: Category[] }>()
);

export const errorLoadingCategories = createAction(
  LOAD_CATEGORIES_ERROR,
  props<{ error: any }>()
);

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../services/category.service';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  LOAD_CATEGORIES,
  errorLoadingCategories,
  loadCategories,
} from '../actions/category.actions';
import { Category } from '../selectors/category.selectors';

export const loadCategoriesEffect = createEffect(
  (actions$ = inject(Actions), categoryService = inject(CategoryService)) => {
    return actions$.pipe(
      ofType(LOAD_CATEGORIES),
      exhaustMap(() =>
        categoryService.getAll().pipe(
          map((categoriesData) => {
            const categories: Category[] = categoriesData as Category[];
            console.log('Category loading detected!!: ', categories);
            return loadCategories({ categories });
          }),
          catchError((error) => of(errorLoadingCategories({ error })))
        )
      )
    );
  },
  { functional: true }
);

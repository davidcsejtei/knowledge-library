import { createFeatureSelector, createSelector } from '@ngrx/store';

export type Category = {
  name: string;
};

export interface CategoriesFeatureState {
  all: Category[];
}

// // AppState
// {
//   ...
//   // CategoriesFeatureState
//   categories: {
//     // Category[]
//     all: [
//       {
//         name: 'Angular',
//       },
//       {
//         name: 'React',
//       },
//     ];
//   }
// }

export const selectFeature =
  createFeatureSelector<CategoriesFeatureState>('categories');

export const selectAllCategories = createSelector(
  selectFeature,
  (state: CategoriesFeatureState) => state.all
);

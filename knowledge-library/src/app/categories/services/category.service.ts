import { Injectable } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCategories } from '../actions/category.actions';
// import { Database, ref, onValue } from '@angular/fire/database';
// import { Store } from '@ngrx/store';
// import { setCategories } from '../actions/category.actions';
// import { CategoriesState } from '../reducers/category.reducers';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private db: Database, private store: Store) {
    const categories = ref(db, '/categories');
    onValue(categories, (snapshot) => {
      const categoriesValue = snapshot.val();
      this.store.dispatch(loadCategories({ categories: categoriesValue }));
    });
  }

  getAll() {
    return new Observable((observer) => {
      observer.next([{ name: 'test category' }]);
    });
  }
}

import { Component } from '@angular/core';
import { PushPipe } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllCategories } from '../categories/selectors/category.selectors';

@Component({
  selector: 'app-knowledge-test',
  templateUrl: './knowledge-test.component.html',
  styleUrls: ['./knowledge-test.component.css'],
  imports: [PushPipe, CommonModule],
  standalone: true,
})
export class KnowledgeTestComponent {
  categories = this.store.select(selectAllCategories);
  categoryList: any[] = [];

  constructor(private store: Store) {
    this.categories.subscribe((categories) => {
      console.log('From component: ', categories);
    });
  }

  get count() {
    return this.categoryList.length;
  }

  questions = [
    {
      question: 'What is the capital of France?',
      answer: 'Paris',
    },
    {
      question: 'Who is CEO of Tesla?',
      answer: 'Elon Musk',
    },
  ];
}

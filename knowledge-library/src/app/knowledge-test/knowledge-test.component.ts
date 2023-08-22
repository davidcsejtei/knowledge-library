import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge-test',
  templateUrl: './knowledge-test.component.html',
  styleUrls: ['./knowledge-test.component.css'],
})
export class KnowledgeTestComponent {
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

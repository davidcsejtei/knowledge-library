import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent {
  addCategoryForm = this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  get name() {
    return this.addCategoryForm.get('name');
  }

  constructor(private formBuilder: FormBuilder) {}

  saveCategory() {
    console.log(this.addCategoryForm.value);
  }
}

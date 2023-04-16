import { Component } from '@angular/core';
import { Category } from 'src/app/categories';
import { CATEGORY } from 'src/app/categories-list';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

}
/*
export interface Category{
  id: number;
  name: string;
  description: string;
}

export const CATEGORY: Category[]=[
  {   id: 1,
      name: 'Tomas',
      description: 'Lorem'
  },
  {   id: 2,
      name: 'Edward',
      description: 'Lorem'
  },
  {   id: 3,
      name: 'Mark',
      description: 'Lorem'
  }
  ]*/

  export class CategorylistComponent {
    category: Category={
      id: 1,
      name: 'Jessie',
      description: 'Mendoza',
      
    };
  
    categories=CATEGORY;
    selectedStudent?: Category;
  
    onSelect(student: Category): void{
      this.selectedStudent = student; 
    }
  }
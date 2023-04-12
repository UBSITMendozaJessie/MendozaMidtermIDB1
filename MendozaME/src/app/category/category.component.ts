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

  export class StudentlistComponent {
    student: Student={
      id: 201012321,
      fname: 'Jessie',
      lname: 'Mendoza',
      dateEnrolled: new Date(2022, 1, 18),
      course: 'BSIT',
      contactNum: '0919232124',
      sPic: 'https://i.pinimg.com/564x/d0/a6/b2/d0a6b2eaada593ad7d43e67abd686059.jpg'
    };
  
    students=STUDENTS;
    selectedStudent?: Student;
  
    onSelect(student: Student): void{
      this.selectedStudent = student; 
    }
  }
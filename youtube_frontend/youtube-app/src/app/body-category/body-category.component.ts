import { Component } from '@angular/core';
import { BodyCategoryListComponent } from '../body-category-list/body-category-list.component';
@Component({
  selector: 'app-body-category',
  standalone: true,
  imports: [BodyCategoryListComponent],
  templateUrl: './body-category.component.html',
  styleUrl: './body-category.component.css'
})
export class BodyCategoryComponent {
  //it will have all the categories
  Categories:{category_name:string}[]=[
    {
      category_name:"All"
    },
    {
      category_name:"Live"
    },
    {
      category_name:"Gaming"
    },
    {
      category_name:"Gaming"
    },
    {
      category_name:"Gaming"
    },
    {
      category_name:"Gaming"
    },
    {
      category_name:"Gaming"
    },
    {
      category_name:"Biswa Kalyan Rath"
    },
    {
      category_name:"Music"
    },
    {
      category_name:"Tanmay Bhat"
    },
  ]
}

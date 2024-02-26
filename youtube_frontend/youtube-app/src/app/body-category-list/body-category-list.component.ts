import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-category-list',
  standalone: true,
  imports: [],
  templateUrl: './body-category-list.component.html',
  styleUrl: './body-category-list.component.css'
})
export class BodyCategoryListComponent {
  @Input() category:{category_name:string} ={
    category_name:"asa"
  }
}

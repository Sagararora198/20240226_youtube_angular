import { Component } from '@angular/core';
import { BodyCategoryComponent } from '../body-category/body-category.component';
@Component({
  selector: 'app-body-main',
  standalone: true,
  imports: [BodyCategoryComponent],
  templateUrl: './body-main.component.html',
  styleUrl: './body-main.component.css'
})
export class BodyMainComponent {

}

import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyLeftComponent } from '../body-left/body-left.component';
import { BodyCategoryComponent } from '../body-category/body-category.component';
import { BodyMainComponent } from '../body-main/body-main.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,BodyLeftComponent,BodyCategoryComponent,BodyMainComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

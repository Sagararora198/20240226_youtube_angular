import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyLeftComponent } from '../body-left/body-left.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,BodyLeftComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

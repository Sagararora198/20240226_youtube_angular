import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyLeftComponent } from '../body-left/body-left.component';
@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [NavbarComponent,BodyLeftComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}

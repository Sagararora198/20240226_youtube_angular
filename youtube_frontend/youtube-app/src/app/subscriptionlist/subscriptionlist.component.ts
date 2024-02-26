import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subscriptionlist',
  standalone: true,
  imports: [],
  templateUrl: './subscriptionlist.component.html',
  styleUrl: './subscriptionlist.component.css'
})
export class SubscriptionlistComponent {
  /** Getting list from parent compoenet
   * 
   */
  @Input() subscription:{channel_pfp:string;channel_name:string}={
    channel_name:"some",
    channel_pfp:"asd"
  }

}

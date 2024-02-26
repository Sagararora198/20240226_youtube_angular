import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SubscriptionlistComponent } from '../subscriptionlist/subscriptionlist.component';
@Component({
  selector: 'app-body-left',
  standalone: true,
  imports: [NgStyle,SubscriptionlistComponent],
  templateUrl: './body-left.component.html',
  styleUrl: './body-left.component.css'
})
export class BodyLeftComponent {
  /**Contain all the the list of subscription
   * 
   */
  Subcriptions:{channel_pfp:string,channel_name:string}[] = [
    {
      channel_pfp:"https://yt3.ggpht.com/ytc/AIdro_nI4V-VZm_zLk3zUSsYMNGFC4_gEJUD1HjH9pMWIQ=s88-c-k-c0x00ffffff-no-rj",
      channel_name:'Akash Gupta'
    },
    {
      channel_pfp:"https://yt3.ggpht.com/ytc/AIdro_nI4V-VZm_zLk3zUSsYMNGFC4_gEJUD1HjH9pMWIQ=s88-c-k-c0x00ffffff-no-rj",
      channel_name:'Akash Gupta'
    },
    {
      channel_pfp:"https://yt3.ggpht.com/ytc/AIdro_nI4V-VZm_zLk3zUSsYMNGFC4_gEJUD1HjH9pMWIQ=s88-c-k-c0x00ffffff-no-rj",
      channel_name:'Akash Gupta'
    },
    {
      channel_pfp:"https://yt3.ggpht.com/ytc/AIdro_nI4V-VZm_zLk3zUSsYMNGFC4_gEJUD1HjH9pMWIQ=s88-c-k-c0x00ffffff-no-rj",
      channel_name:'Akash Gupta'
    },
    

  ]
}

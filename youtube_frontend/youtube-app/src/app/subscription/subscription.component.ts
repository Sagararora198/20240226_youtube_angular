import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyLeftComponent } from '../body-left/body-left.component';
import { VideoList } from '../Services/videoListService';
import { VideoBoxComponent } from "../video-box/video-box.component";
import { BodyCategoryListComponent } from "../body-category-list/body-category-list.component";
import { BodyCategoryComponent } from "../body-category/body-category.component";
@Component({
    selector: 'app-subscription',
    standalone: true,
    templateUrl: './subscription.component.html',
    styleUrl: './subscription.component.css',
    providers: [VideoList],
    imports: [NavbarComponent, BodyLeftComponent, VideoBoxComponent, BodyCategoryListComponent, BodyCategoryComponent]
})
export class SubscriptionComponent {
  constructor(private videoList:VideoList){
    this.Videos = this.videoList.Videos
  }
  Videos:{video_name:string,video_preview:string,video_desc:string,subscribed:boolean}[];

}

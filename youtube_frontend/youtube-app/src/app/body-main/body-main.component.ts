import { Component } from '@angular/core';
import { BodyCategoryComponent } from '../body-category/body-category.component';
import { VideoBoxComponent } from '../video-box/video-box.component';
import { VideoList } from '../Services/videoListService';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-body-main',
  standalone: true,
  imports: [BodyCategoryComponent,VideoBoxComponent],
  templateUrl: './body-main.component.html',
  styleUrl: './body-main.component.css',
  providers:[VideoList]
})
export class BodyMainComponent {
  constructor(private videolist:VideoList){
    this.Videos = this.videolist.Videos
  }

  Videos:{video_name:string,video_preview:string,video_desc:string,subscribed:boolean}[];

}

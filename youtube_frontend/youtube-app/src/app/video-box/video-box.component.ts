import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-box',
  standalone: true,
  imports: [],
  templateUrl: './video-box.component.html',
  styleUrl: './video-box.component.css'
})
export class VideoBoxComponent {
  @Input() video:{video_name:string,video_preview:string,video_desc:string,subscribed:boolean}={
    video_name:"as",
    video_preview:"as",
    video_desc:"as",
    subscribed:false

  }
}

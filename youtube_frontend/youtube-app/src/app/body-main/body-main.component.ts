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
  Videos:{video_name:string,video_preview:string,video_desc:string,}[]=[
    {
      video_name:"this",
      video_preview:"sef",
      video_desc:""
    }
  ]
}

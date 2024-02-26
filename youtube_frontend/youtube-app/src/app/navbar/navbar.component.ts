import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isVisible:boolean = false
  toggleVisibility(){
    // console.log("clicked");
    
    this.isVisible = !this.isVisible
  }
}

import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-setting',
    standalone: true,
    templateUrl: './setting.component.html',
    styleUrl: './setting.component.css',
    imports: [NavbarComponent]
})
export class SettingComponent {

}

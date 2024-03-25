import { Component } from '@angular/core';
import {faAdd, faHome, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        FaIconComponent,
        RouterLink
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


    protected readonly faAdd = faAdd;
    protected readonly faHome = faHome;
    protected readonly faUpload = faUpload;
}

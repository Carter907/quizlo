import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-new-deck',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-new-deck.component.html',
  styleUrl: './create-new-deck.component.css'
})
export class CreateNewDeckComponent {

  name = new FormControl('')
}

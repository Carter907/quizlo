import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Card} from "../card";

@Component({
  selector: 'app-create-new-deck',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-new-deck.component.html',
  styleUrl: './create-new-deck.component.css'
})
export class CreateNewDeckComponent {

  name = new FormControl('');
  cards: Card[] = []

  onSubmit() {

  }
  addCard() {
    this.cards.push()
  }
}

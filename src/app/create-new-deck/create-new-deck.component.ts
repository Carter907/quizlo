import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Card} from "../card";
import {invoke} from "@tauri-apps/api/tauri";

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

  addDeck() {
    console.log(this.name.value);
    invoke<string>("add_deck", {deck: { id: -1, name: this.name.value}}).then((message) => {

      console.log(message)
    })
  }
}

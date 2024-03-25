import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Card} from "../card";
import {invoke} from "@tauri-apps/api/tauri";

@Component({
  selector: 'app-create-deck',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.css'
})
export class CreateDeckComponent {

  name = new FormControl('');

  addDeck() {
    invoke<string>("add_deck", {deck: { id: -1, name: this.name.value}}).then((message) => {

      console.log(message)
    })
  }
}

import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {invoke} from "@tauri-apps/api/tauri";

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
export class CreateCardComponent {

  front = new FormControl('');
  back = new FormControl('');

  addCard() {
    invoke<string>("add_card", {deck: { id: -1, front: this.front.value, back: this.back.value}}).then((message) => {

      console.log(message)
    })
  }

}

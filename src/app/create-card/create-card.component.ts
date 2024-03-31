import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {invoke} from "@tauri-apps/api/tauri";
import {Deck} from "../deck";
import {message} from "@tauri-apps/api/dialog";

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
export class CreateCardComponent implements OnInit {

    front = new FormControl('');
    back = new FormControl('');
    selected_deck = new FormControl<Deck>({id: -1, name: ''});
    decks: Deck[] = [];

    addCard() {
        if (this.selected_deck.value) {
            invoke<string>("add_card", {
                card: {
                    id: -1,
                    front: this.front.value,
                    back: this.back.value,
                    deck_id: this.selected_deck.value.id
                }
            }).then((message) => {



            });
        }


    }

    ngOnInit(): void {
        invoke<Deck[]>("get_decks").then((decks) => {
            this.decks = decks;
        });
    }

}

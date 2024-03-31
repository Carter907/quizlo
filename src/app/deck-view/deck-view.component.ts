import {Component, EventEmitter, input, Input, Output} from '@angular/core';
import {Deck} from "../deck";
import {NgClass} from "@angular/common";
import {faClose, faCross} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {invoke} from "@tauri-apps/api/tauri";
import {emit} from "@tauri-apps/api/event";

@Component({
    selector: 'app-deck-view',
    standalone: true,
    imports: [
        NgClass,
        FaIconComponent
    ],
    templateUrl: './deck-view.component.html',
    styleUrl: './deck-view.component.css'
})
export class DeckViewComponent {


    deck = input.required<Deck>();
    selected = input<boolean>(false);
    @Output() removed = new EventEmitter<boolean>();

    protected readonly faClose = faClose;

    removeDeck() {
        invoke("remove_deck", {deck: this.deck()}).then((message) => {
            console.log(message)
            this.removed.emit(true)
        });

    }
}

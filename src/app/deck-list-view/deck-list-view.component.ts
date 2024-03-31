import {Component, EventEmitter, input, Input, OnInit, Output} from '@angular/core';
import { Deck } from '../deck';
import {DeckViewComponent} from "../deck-view/deck-view.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-deck-list-view',
  standalone: true,
  imports: [
    DeckViewComponent,
    NgClass
  ],
  templateUrl: './deck-list-view.component.html',
  styleUrl: './deck-list-view.component.css'
})
export class DeckListViewComponent implements OnInit {

  decks = input.required<Deck[]>();
  selected_deck = input<Deck>({ id: -1, name: 'null' });
  @Output()
  new_selected_deck = new EventEmitter<Deck>()
  @Output()
  refresh_deck = new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  refresh_deck_list() {
    this.refresh_deck.emit(true);
  }


  deck_clicked(deck: Deck) {
    this.new_selected_deck.emit(deck)
  }
}

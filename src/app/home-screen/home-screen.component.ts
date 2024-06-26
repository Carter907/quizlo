import {Component, OnInit} from '@angular/core';
import {Card} from "../card";
import {Deck} from "../deck";
import {invoke} from "@tauri-apps/api/tauri";
import {CardListViewComponent} from "../card-list-view/card-list-view.component";
import {DeckListViewComponent} from "../deck-list-view/deck-list-view.component";
import {MathJaxParagraphComponent} from "../math-jax-paragraph/math-jax-paragraph.component";

@Component({
  selector: 'app-home-screen',
  standalone: true,
    imports: [
        CardListViewComponent,
        DeckListViewComponent,
        MathJaxParagraphComponent
    ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent implements OnInit {

  cards: Card[] = [];
  decks: Deck[] = [];
  selected_deck: Deck = { id: -1, name: 'null' }
  ngOnInit(): void {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    this.get_all_decks();

  }
  select_deck(deck: Deck) {
    this.selected_deck = deck;
    invoke<Card[]>("get_cards",{ deck: this.selected_deck }).then((cards) => {
      this.cards = cards;
    });
  }

  get_all_decks() {
    invoke<Deck[]>("get_decks").then((decks: Deck[]) => {
      this.decks = decks;
      if (!decks.includes(this.selected_deck)) {
        this.select_deck({id: -1, name: ''})
      }
    });
  }
}

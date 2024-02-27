import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/tauri";
import {Card} from "./card";
import {NavbarComponent} from "./navbar/navbar.component";
import {CardListViewComponent} from "./card-list-view/card-list-view.component";
import {DeckListViewComponent} from "./deck-list-view/deck-list-view.component";
import {Deck} from "./deck";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, CardListViewComponent, DeckListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cards: Card[] = [];
  decks: Deck[] = [];
  selected_deck: Deck = { id: -1, name: 'null' }
  ngOnInit(): void {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

    invoke<Deck[]>("get_decks").then((decks) => {
      this.decks = decks;
    });

  }
  select_deck(deck: Deck) {
    this.selected_deck = deck;
    invoke<Card[]>("get_cards",{ deck: this.selected_deck }).then((cards) => {
      this.cards = cards;
    });
  }

}

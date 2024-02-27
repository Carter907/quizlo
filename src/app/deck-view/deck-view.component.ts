import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Deck} from "../deck";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-deck-view',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './deck-view.component.html',
  styleUrl: './deck-view.component.css'
})
export class DeckViewComponent {

  @Input()
  deck: Deck = { id: -1, name: 'null' }
  @Input() selected!: boolean;

}

import {Component, input, Input, OnInit, signal} from '@angular/core';
import {Card} from "../card";

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent implements OnInit {
  showBack = false;
  card = input.required<Card>();
  displayText = '';

  ngOnInit(): void {

    this.displayText = this.card().front
  }

  clickCard() {
    this.showBack = ! this.showBack;
    this.displayText = this.showBack ? this.card().back : this.card().front
  }
}

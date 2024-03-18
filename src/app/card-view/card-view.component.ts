import {Component, Input} from '@angular/core';
import {Card} from "../card";

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {

  showBack = false;
  @Input()
  card: Card = { id: -1, front: '', back: '', deck_id: -1 }


  clickCard() {
    this.showBack = ! this.showBack;
  }
}

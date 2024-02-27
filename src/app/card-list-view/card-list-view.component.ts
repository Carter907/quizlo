import {Component, Input} from '@angular/core';
import {Card} from "../card";
import {CardViewComponent} from "../card-view/card-view.component";

@Component({
  selector: 'app-card-list-view',
  standalone: true,
  imports: [
    CardViewComponent
  ],
  templateUrl: './card-list-view.component.html',
  styleUrl: './card-list-view.component.css'
})
export class CardListViewComponent {

  @Input()
  cards: Card[] = []


}

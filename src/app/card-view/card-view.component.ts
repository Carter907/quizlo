import {Component, EventEmitter, input, Input, OnInit, Output, signal} from '@angular/core';
import {Card} from "../card";
import {NgClass} from "@angular/common";
import {MathJaxParagraphComponent} from "../math-jax-paragraph/math-jax-paragraph.component";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {invoke} from "@tauri-apps/api/tauri";

@Component({
    selector: 'app-card-view',
    standalone: true,
    imports: [
        NgClass,
        MathJaxParagraphComponent,
        FaIconComponent
    ],
    templateUrl: './card-view.component.html',
    styleUrl: './card-view.component.css'
})
export class CardViewComponent {
    showBack = false;
    card = input.required<Card>();
    @Output()
    remove = new EventEmitter<boolean>(false);

    clickCard() {
        this.showBack = !this.showBack;
    }

    protected readonly faClose = faClose;

    removeCard() {
        invoke("remove_card", { card: this.card() }).then((message) => {
            console.log(message)
            this.remove.emit(true)
        });
    }
}

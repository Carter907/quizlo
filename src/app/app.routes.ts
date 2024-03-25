import { Routes } from "@angular/router";
import {CreateDeckComponent} from "./create-deck/create-deck.component";
import {HomeScreenComponent} from "./home-screen/home-screen.component";
import {CreateCardComponent} from "./create-card/create-card.component";

export const routes: Routes = [

    { path: '', component: HomeScreenComponent },
    { path: 'create-deck', component: CreateDeckComponent },
    { path: 'create-card', component: CreateCardComponent }
];

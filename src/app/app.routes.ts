import { Routes } from "@angular/router";
import {CreateNewDeckComponent} from "./create-new-deck/create-new-deck.component";
import {HomeScreenComponent} from "./home-screen/home-screen.component";

export const routes: Routes = [

    { path: '', component: HomeScreenComponent },
    { path: 'create-new-deck', component: CreateNewDeckComponent }
];

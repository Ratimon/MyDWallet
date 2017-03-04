import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HistoryComponent} from "./history/history.component";



export const routes : Routes = [
    {
        path: '',
        pathMatch: 'prefix', //default
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
        {
        path: 'history',
        component: HistoryComponent
    }
];
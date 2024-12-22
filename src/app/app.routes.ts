import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeChildComponent} from './home-child/home-child.component';
export const routes: Routes = 
[
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'homeChild',
        component: HomeChildComponent,
        title: 'Home page',
    },    

];

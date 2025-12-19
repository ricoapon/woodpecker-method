import { Routes } from '@angular/router';
import {Login} from "./login/login";
import {authGuard} from "./login/auth.guard";
import {Home} from "./home/home";

export const routes: Routes = [
    { path: 'login', component: Login },
    {
        path: '',
        component: Home,
        canActivate: [authGuard]
    },
    { path: '**', redirectTo: '' }
];

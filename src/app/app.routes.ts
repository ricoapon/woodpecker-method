import { Routes } from '@angular/router';
import {LoginScreen} from "./login-screen/login-screen";
import {authGuard} from "./auth/auth.guard";
import {Home} from "./home/home";

export const routes: Routes = [
    { path: 'login', component: LoginScreen },
    {
        path: '',
        component: Home,
        canActivate: [authGuard]
    },
    { path: '**', redirectTo: '' }
];

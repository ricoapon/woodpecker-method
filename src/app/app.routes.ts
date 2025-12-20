import {Routes} from '@angular/router';
import {LoginScreen} from "./login-screen/login-screen";
import {authGuard} from "./auth/auth.guard";
import {PlayThroughPuzzlesScreen} from './play-through-puzzles-screen/play-through-puzzles-screen';

export const routes: Routes = [
  {path: 'login', component: LoginScreen},
  {
    path: '',
    component: PlayThroughPuzzlesScreen,
    canActivate: [authGuard]
  },
  {path: '**', redirectTo: ''}
];

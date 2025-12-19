import {Injectable} from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider, signOut, authState, User} from '@angular/fire/auth';
import {firstValueFrom, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth)
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await firstValueFrom(this.user$);
    return !!user;
  }

  logout() {
    return signOut(this.auth);
  }
}

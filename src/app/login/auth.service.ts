import {Injectable} from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider, signOut, authState, User} from '@angular/fire/auth';
import {firstValueFrom, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly user$: Observable<User | null>
  // Keep a synced value for convenience.
  private _currentUser: User | null = null

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth)
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(this.auth, provider)
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await firstValueFrom(this.user$)
    this._currentUser = user
    return !!user;
  }

  logout() {
    this._currentUser = null
    return signOut(this.auth)
  }

  currentUser(): User {
    if (this._currentUser === null) {
      throw Error("Trying to get the current user, but we aren't logged in yet.")
    }
    return this._currentUser!!
  }
}

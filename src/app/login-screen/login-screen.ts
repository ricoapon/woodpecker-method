import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.css',
  standalone: true
})
export class LoginScreen {
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {
    // Whenever the user is logged in, we redirect to home. Note that the user promise is fixed and is updated whenever
    // a user is set. This can be because the user was already logged in when opening the page or the user logged in.
    this.auth.user$.subscribe((user) => {
      if (user !== null) {
        this.router.navigate(['/'])
      }
    })
  }

  async loginWithGoogle() {
    this.error = null;
    try {
      await this.auth.loginWithGoogle();
      // Redirect to home page after successful login is done in the constructor code.
    } catch (err: any) {
      console.error(err);
      this.error = err.message || 'LoginScreen failed';
    }
  }
}

import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  async loginWithGoogle() {
    this.error = null;
    try {
      await this.auth.loginWithGoogle();
      // Redirect to home page after successful login
      this.router.navigate(['/']);
    } catch (err: any) {
      console.error(err);
      this.error = err.message || 'Login failed';
    }
  }
}

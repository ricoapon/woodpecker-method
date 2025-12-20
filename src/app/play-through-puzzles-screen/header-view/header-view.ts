import {Component, Input} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {User} from '@angular/fire/auth';

@Component({
  selector: 'app-header-view',
  imports: [],
  templateUrl: './header-view.html',
  styleUrl: './header-view.css',
  standalone: true
})
export class HeaderView {
  @Input() puzzleId!: number
  user: User

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.currentUser()
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/login']))
  }
}

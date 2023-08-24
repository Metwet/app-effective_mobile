import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {}

  login():void {
    const isAuthenticated = this.authService.authenticate(this.user.email, this.user.password);

    if (isAuthenticated) {
      console.log('Успешная аутентификация');
      this.router.navigate(['/posts']);
    } else {
      console.log('Неудачная аутентификация');
    }
  }
}

import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  user: User = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user);
    this.user = {
      username: '',
      email: '',
      password: ''
    }; 
  }
}

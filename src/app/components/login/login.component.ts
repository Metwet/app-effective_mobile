import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  showUserExistsMessage: boolean = false;
  wrongPasswordMessageVisible = false;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login():void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    const isAuthenticated = this.authService.authenticate(email, password);
    if (isAuthenticated) {
      this.router.navigate(['/posts']);
    } else {
      this.wrongPasswordMessageVisible = true;
    }
  }

  checkUserExists(): void {
    const email = this.loginForm.get('email')?.value;
    const userExists = this.authService.userExists(email);
    this.showUserExistsMessage = userExists;
  }
}

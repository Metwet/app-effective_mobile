import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  private updateLocalStorage():void {
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log(this.users);
  }

  register(user: User):void {
    this.users.push(user);
    this.updateLocalStorage();
  }

  authenticate(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user;
  }
}

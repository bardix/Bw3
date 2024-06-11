import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor (private AuthService: AuthService, private Router: Router) {}

logout() {
  this.AuthService.logout()
  this.Router.navigate(['/homepage'])
}

}

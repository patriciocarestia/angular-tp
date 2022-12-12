import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  isUserAuthenticated() {
    const token: string | null = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  
  logOut() {
    localStorage.removeItem("jwt");
  }

  ngOnInit(): void {
  }

}

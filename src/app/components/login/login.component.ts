import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  url: string = `${environment.apiUrl}/User/login`;
  invalidLogin: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }

    this.http.post(this.url, credentials)
    .subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/persons/list"]);
    }, err => {
      this.invalidLogin = true;
    })

  }

}

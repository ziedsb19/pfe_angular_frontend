import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],

})
export class LoginComponentComponent implements OnInit {

  LoginForm: FormGroup
  login_error = false

  constructor(private auth: AuthService, private router: Router) {
    this.LoginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {


    this.auth.login(this.LoginForm.value).subscribe(
      (data) => {
        this.login_error = false
        localStorage.setItem("token", data["token"])
        this.router.navigateByUrl("/")
      },
      (errors) => {
        this.login_error = true
      })

  }

}

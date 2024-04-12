import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private service: ApiService) { }

  loginData: any;
  errorMsg: any;
  logedin: any
  
  loginForm = this.fb.group({
    id: this.fb.control({ value: '', disabled: true }),
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  })

  ngOnInit(): void {

  }

  saveLogin() {
    let uname = this.loginForm.controls.username.value;
    let pass = this.loginForm.controls.password.value;
    this.service.getAllUserData().subscribe(res => {
      this.loginData = res;
      if (this.loginData.length > 0) {
        this.loginData.forEach((ele: any) => {
          if (ele.username == uname && ele.password == pass) {
            this.router.navigate(['/details']);
          }
          else {
            this.errorMsg = true;
          }
        });
      } else {
        this.errorMsg = true;
      }
    })
  }

  register() {
    this.router.navigate(['/register']);
  }
}
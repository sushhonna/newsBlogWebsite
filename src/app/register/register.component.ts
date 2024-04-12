import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private service: ApiService) { }
  errorMsg: any = false;


  registerForm = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  })

  ngOnInit(): void {
  }
  saveRegistration() {
    if (this.registerForm.controls.username.value != "" && this.registerForm.controls.password.value != "") {
      this.service.postUserData(this.registerForm.value).subscribe(res => {
        this.router.navigate(['/login']);
      })
    } else {
      this.errorMsg = true;
    }
  }


  login() {
    this.router.navigate(['/login']);
  }

}

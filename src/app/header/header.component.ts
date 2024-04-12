import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  Signin() {
    this.router.navigate(['/register']);
  }
  dashboard() {
    this.router.navigate(['/dashboard']);
  }
  details() {
    this.router.navigate(['/login']);
  }
 
}
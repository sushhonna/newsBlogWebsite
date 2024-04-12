import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newsBlogs: any;
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getNewsBlogData().subscribe(res => {
      this.newsBlogs = res;
    })
  }

}

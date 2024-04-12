import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { newsmodel } from '../models/newsmodel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  newsDataWithPagination: any;
  allNewsData: any;
  newsBlogs: any;

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  createNews() {
    this.router.navigate(['/createnews']);
  }

  getAllData() {
    this.service.getNewsBlogData().subscribe(res => {
      this.newsBlogs = res;
      this.newsDataWithPagination = new MatTableDataSource<newsmodel>(this.newsBlogs);
      this.allNewsData = this.newsDataWithPagination.filteredData;
      this.newsDataWithPagination.paginator = this._paginator;
    }) 
  }

}

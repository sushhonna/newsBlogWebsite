import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-createnews',
  templateUrl: './createnews.component.html',
  styleUrls: ['./createnews.component.scss']
})
export class CreatenewsComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private service: ApiService) { }

  msg: any;

  createNewsForm = this.fb.group({
    id: this.fb.control({ value: '', disabled: true }),
    news_name: this.fb.control('', Validators.required),
    news_desc: this.fb.control('', Validators.required),
    news_img: this.fb.control('', Validators.required),
    news_detail: this.fb.control('', Validators.required),
  })
  ngOnInit(): void {

  }

  saveCreatedNews() {
    if (this.createNewsForm.controls.news_name.value != "" && this.createNewsForm.controls.news_img.value != "") {
      this.service.postNewsBlogData(this.createNewsForm.value).subscribe(res => {
        this.router.navigate(['/details']);
      })
    } else {
      this.msg = true;
    }
  }

  cancel() {
    this.router.navigate(['/details']);
  }

}
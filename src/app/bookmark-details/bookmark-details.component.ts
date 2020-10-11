import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss']
})
export class BookmarkDetailsComponent implements OnInit {
  bookmark: object;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('bookmarkId');
      this.http.get('assets/bookmarks.json').subscribe((data: object[]) => data[id] ? this.bookmark = data[id] : '');
    });
  }

}

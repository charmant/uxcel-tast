import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})

export class BookmarkListComponent implements OnInit {
  search = '';
  dataLoading = true;
  bookmarks: object[] = (new Array(8)).fill({
    title: '',
    image: '',
    marked: false,
  }, );
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.http.get('assets/bookmarks.json').subscribe((data: object[]) => { this.bookmarks = data; this.dataLoading = false; });
    }, 2000);
  }

  get filteredBookmarks(): object[] {
    return !this.bookmarks ? [] : this.bookmarks.filter((item: any ) => item.title.toLowerCase().includes(this.search.toLowerCase()));
  }
}

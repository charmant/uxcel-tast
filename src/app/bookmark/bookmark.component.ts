import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})

export class BookmarkComponent implements OnInit {
  @Input() bookmark: any = {
    title: '',
    image: '',
    marked: false,
  };
  @Input() bookmarkId: number;
  @Input() skeleton: boolean;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClick(): any {
    if (this.skeleton) { return; }
    return this.router.navigate(['/bookmarks', this.bookmarkId]);
  }
}

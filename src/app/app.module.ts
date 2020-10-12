import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkListComponent,
    BookmarkComponent,
    BookmarkDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BookmarkListComponent },
      { path: 'bookmarks/:bookmarkId', component: BookmarkDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

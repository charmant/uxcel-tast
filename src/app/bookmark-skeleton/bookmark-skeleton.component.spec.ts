import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkSkeletonComponent } from './bookmark-skeleton.component';

describe('BookmarkSkeletonComponent', () => {
  let component: BookmarkSkeletonComponent;
  let fixture: ComponentFixture<BookmarkSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditFormComponent } from './book-edit-form.component';

describe('BookEditFormComponent', () => {
  let component: BookEditFormComponent;
  let fixture: ComponentFixture<BookEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

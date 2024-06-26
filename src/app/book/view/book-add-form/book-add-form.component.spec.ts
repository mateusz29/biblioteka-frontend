import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddFormComponent } from './book-add-form.component';

describe('BookAddFormComponent', () => {
  let component: BookAddFormComponent;
  let fixture: ComponentFixture<BookAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAddFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

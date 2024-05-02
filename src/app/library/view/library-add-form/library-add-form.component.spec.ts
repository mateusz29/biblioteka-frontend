import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAddFormComponent } from './library-add-form.component';

describe('LibraryAddFormComponent', () => {
  let component: LibraryAddFormComponent;
  let fixture: ComponentFixture<LibraryAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryAddFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

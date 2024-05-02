import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '../../service/library.service';
import { Library } from '../../model/library.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-add-form',
  templateUrl: './library-add-form.component.html',
  styleUrl: './library-add-form.component.css'
})

export class LibraryAddFormComponent {
  libraryForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private libraryService: LibraryService) {
    this.libraryForm = this.fb.group({
      name: ['', [Validators.required]],
      yearFounded: ['', [Validators.required]],
    });
  }
  addLibrary() {
    if (this.libraryForm.valid) {
      const newLibrary: Library = {
        id: '',
        name: this.libraryForm.value.name,
        yearFounded: this.libraryForm.value.yearFounded,
      };

      this.libraryService.addLibrary(newLibrary).subscribe(response => {
        this.router.navigate(['/libraries']);
      });
    }
  }
}

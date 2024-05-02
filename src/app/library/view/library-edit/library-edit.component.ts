import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Library } from '../../model/library.model';
import { LibraryService } from '../../service/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-edit',
  templateUrl: './library-edit.component.html',
  styleUrl: './library-edit.component.css'
})

export class LibraryEditComponent implements OnInit {
  libraryForm!: FormGroup;
  libraryId!: string;
  library!: Library;

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    this.libraryId = this.route.snapshot.params['id'];

    this.libraryService.getLibraryById(this.libraryId).subscribe((library: Library) => {
      this.library = library;

      this.libraryForm = this.fb.group({
        id: [this.library ? this.library.id : '', Validators.required],
        name: [this.library ? this.library.name : '', Validators.required],
        yearFounded: [this.library ? this.library.yearFounded : '', Validators.required]
      });
    });
  }

  updateLibrary() {
    if (this.libraryForm.valid) {
      const updatedLibrary: Library = {
        id: this.libraryForm.value.id,
        name: this.libraryForm.value.name,
        yearFounded: this.libraryForm.value.yearFounded
      };

      this.libraryService.updateLibrary(updatedLibrary).subscribe(response => {
        this.router.navigate(['/libraries']);
      });
    }
  }
}

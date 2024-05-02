import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "../../service/book.service";
import { Book } from "../../model/book.model";

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrl: './book-add-form.component.css'
})

export class BookAddFormComponent  {
  bookForm: FormGroup;
  libraryId: string | undefined;

  constructor(private fb: FormBuilder, private router: Router, private bookService: BookService, private route: ActivatedRoute) {
    this.libraryId = this.route.snapshot.params['id'];
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      yearPublished: ['', [Validators.required]],
    });
  }
  addBook() {
    if (this.bookForm.valid) {
      if (this.libraryId){
        const newBook: Book = {
          id: '',
          title: this.bookForm.value.title,
          author: this.bookForm.value.author,
          yearPublished: this.bookForm.value.yearPublished,
          library: this.libraryId,
        };
        this.bookService.addBook(newBook).subscribe(response => {
          this.router.navigate(['/libraries', this.libraryId]);
        });
      }
    }
  }
}

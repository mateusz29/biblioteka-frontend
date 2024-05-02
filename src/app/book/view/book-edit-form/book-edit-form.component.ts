import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Book } from "../../model/book.model";
import { BookService } from "../../service/book.service";

@Component({
  selector: 'app-book-edit-form',
  templateUrl: './book-edit-form.component.html',
  styleUrl: './book-edit-form.component.css'
})

export class BookEditFormComponent {
  bookForm!: FormGroup;
  bookId: string;
  book!: Book;

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private bookService: BookService
  ) {
    this.bookId = this.route.snapshot.params['id'];

    this.bookService.getBookById(this.bookId).subscribe((book: Book) => {
      this.book = book;

      this.bookForm = this.fb.group({
        bookId: [this.book ? this.bookId : '', Validators.required],
        title: [this.book ? this.book.title : '', Validators.required],
        author: [this.book ? this.book.author : '', Validators.required],
        yearPublished: [this.book ? this.book.yearPublished : '', Validators.required],
        libraryId: [this.book ? this.book.library : '', Validators.required],
      });
    });
  }

  updateBook() {
    if (this.bookForm.valid) {
      const updatedBook: Book = {
        id: this.bookId,
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        yearPublished: this.bookForm.value.yearPublished,
        library: this.bookForm.value.libraryId,
      };

      this.bookService.updateBook(updatedBook).subscribe(response => {
        this.router.navigate(['/libraries', updatedBook.library]);
      });
    }
  }
}

import { Component } from '@angular/core';
import { Book } from "../../model/book.model";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "../../service/book.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})

export class BookDetailsComponent {
  bookId: string | undefined;
  book: Book | undefined;

  constructor(
      private route: ActivatedRoute,
      private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];

    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe((book: Book) => {
        this.book = book;
      });
    }
  }
}

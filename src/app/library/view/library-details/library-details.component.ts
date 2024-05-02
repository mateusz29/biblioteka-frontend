import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../service/library.service';
import { Library } from '../../model/library.model';
import { BookService } from "../../../book/service/book.service";
import { Book } from "../../../book/model/book.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrl: './library-details.component.css'
})

export class LibraryDetailsComponent implements OnInit {
  libraryId: string | undefined;
  library: Library | undefined;
  books: Book[] = [];

  constructor(
      private route: ActivatedRoute,
      private libraryService: LibraryService,
      private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.libraryId = this.route.snapshot.params['id'];

    if (this.libraryId) {
      this.libraryService.getLibraryById(this.libraryId).subscribe((library: Library) => {
        this.library = library;
        this.getBooksByLibraryId(this.libraryId!);
      });
    }
  }

  getBooksByLibraryId(id: string) {
    this.bookService.getBooksByLibraryId(id).subscribe((response: any) => {
      this.books = response.books;
    });
  }


  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe((response: any) => {
      this.getBooksByLibraryId(this.libraryId!);
    });
  }
}

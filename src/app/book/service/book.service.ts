import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../model/book.model";
import { v4 as uuid } from "uuid";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private http: HttpClient) {
    }

    getBooksByLibraryId(id: string): Observable<any[]> {
        return this.http.get<any[]>('/api/libraries/' + id + '/books');
    }

    deleteBook(id: string) {
        return this.http.delete('/api/books/' + id);
    }

    addBook(book: Book): Observable<any> {
        book.id = uuid();
        return this.http.put<any>(`/api/books/${book.id}`, book);
    }

    updateBook(book: Book): Observable<any> {
        return this.http.put<any>(`/api/books/${book.id}`, book);
    }
    getBookById(id: string): Observable<Book> {
        return this.http.get<Book>('/api/books/' + id);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';
import { Library } from "../model/library.model";

@Injectable({
    providedIn: 'root'
})
export class LibraryService {
    constructor(private http: HttpClient) {}

    getLibraries(): Observable<any[]> {
        return this.http.get<any[]>('/api/libraries');
    }
    getLibraryById(id: string): Observable<Library> {
        return this.http.get<Library>('/api/libraries/' + id);
    }

    addLibrary(library: Library): Observable<any> {
        library.id = uuid();
        return this.http.put<any>(`/api/libraries/${library.id}`, library);
    }
    updateLibrary(library: Library): Observable<any> {
        return this.http.put<any>(`/api/libraries/${library.id}`, library);
    }
    deleteLibrary(id: string): Observable<any> {
        return this.http.delete('/api/libraries/' + id);
    }
}

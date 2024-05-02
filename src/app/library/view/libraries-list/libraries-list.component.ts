import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../service/library.service';
import { Library } from '../../model/library.model';

@Component({
  selector: 'app-libraries-list',
  templateUrl: './libraries-list.component.html',
  styleUrl: './libraries-list.component.css'
})

export class LibrariesListComponent implements OnInit {
  libraries: Library[] | undefined;

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.loadLibraries();
  }

  loadLibraries(): void {
    this.libraryService.getLibraries().subscribe((data: any) => {
      this.libraries = data.libraries.map((library: any) => {
        return new Library(
            library.id,
            library.name,
            library.yearFounded
        );
      });
    });
  }

  deleteLibrary(id: string): void {
    this.libraryService.deleteLibrary(id).subscribe(() => {
      this.loadLibraries();
    });
  }

}

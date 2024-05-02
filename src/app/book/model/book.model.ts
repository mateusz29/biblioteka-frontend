export class Book {
  id: string;
  title: string;
  author: string;
  yearPublished: number;
  library: string;

  constructor(id: string, title: string, author: string, yearPublished: number, libraryId: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.library = libraryId;
  }
}

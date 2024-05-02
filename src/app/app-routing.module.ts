import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibrariesListComponent } from './library/view/libraries-list/libraries-list.component';
import { LibraryAddFormComponent } from './library/view/library-add-form/library-add-form.component';
import { LibraryEditComponent } from './library/view/library-edit/library-edit.component';
import { LibraryDetailsComponent } from './library/view/library-details/library-details.component';
import { BookAddFormComponent } from './book/view/book-add-form/book-add-form.component';
import { BookEditFormComponent } from './book/view/book-edit-form/book-edit-form.component';
import { BookDetailsComponent } from './book/view/book-details/book-details.component';

const routes: Routes = [
  {
      component: LibrariesListComponent,
      path: 'libraries'
  },
  {
      component: LibraryAddFormComponent,
      path: 'add-library'
  },
  {
      component: LibraryEditComponent,
      path: 'libraries/:id/edit'
  },
  {
      component: LibraryDetailsComponent,
      path: 'libraries/:id'
  },
  {
      component: BookAddFormComponent,
      path: 'libraries/:id/add-book',
  },
  {
      component: BookEditFormComponent,
      path: 'books/:id/edit',
  },
  {
      component: BookDetailsComponent,
      path: 'books/:id',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

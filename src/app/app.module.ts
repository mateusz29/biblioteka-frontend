import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './component/nav/nav.component';

import { LibrariesListComponent } from './library/view/libraries-list/libraries-list.component';
import { LibraryAddFormComponent } from './library/view/library-add-form/library-add-form.component';
import { LibraryEditComponent } from './library/view/library-edit/library-edit.component';
import { LibraryDetailsComponent } from './library/view/library-details/library-details.component';
import { BookAddFormComponent } from './book/view/book-add-form/book-add-form.component';
import { BookEditFormComponent } from './book/view/book-edit-form/book-edit-form.component';
import { BookDetailsComponent } from './book/view/book-details/book-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LibrariesListComponent,
        LibraryAddFormComponent,
        LibraryDetailsComponent,
        LibraryEditComponent,
        BookDetailsComponent,
        BookEditFormComponent,
        BookAddFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

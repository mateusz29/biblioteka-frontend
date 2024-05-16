# BibliotekaAngular

BibliotekaAngular is the front-end application for the Biblioteka microservices project. This Angular application provides a user interface for managing libraries and books, interacting seamlessly with the back-end microservices to offer a comprehensive library management system.

## Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3. It offers a range of functionalities to manage libraries and books, including adding, editing, viewing details, and listing both libraries and books. The application is designed to work in conjunction with the Biblioteka microservices, providing a complete solution for library management.

## Key Features

- **Library Management**: Add new libraries, edit existing ones, view detailed information, and list all libraries.
- **Book Management**: Add new books to libraries, edit book details, view detailed information about books, and list all books within a library.

## Routing

The application uses Angular routing to navigate between different views. The available routes are defined in `app-routing.module.ts`:

- `/libraries`: List of all libraries
- `/add-library`: Form to add a new library
- `/libraries/:id/edit`: Form to edit an existing library
- `/libraries/:id`: Details of a specific library
- `/libraries/:id/add-book`: Form to add a new book to a specific library
- `/books/:id/edit`: Form to edit an existing book
- `/books/:id`: Details of a specific book

## Running 

Firstly start the [microservices](https://github.com/mateusz29/biblioteka-microservices). Then start the angular server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

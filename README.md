# Project Summary

This project is a comprehensive online marketplace application where users can buy and sell goods. The application follows a microservices architecture and is split into frontend and backend services, each with its responsibilities and functionality.

## Backend

The backend of the application is built on Node.js, with Hapi.js as the chosen framework for building APIs. It utilizes Babel for transpiling ES6+ JavaScript code into a backwards compatible version for older JavaScript environments. It also uses Firebase Authentication for secure user authentication.

The backend communicates with a MySQL database using a custom-made database module. This module exports a db object with methods for connecting to the database, querying the database, and ending the database connection.

The application has a collection of API routes to facilitate the different functionalities of the marketplace such as fetching all listings, creating a listing, editing a listing, deleting a listing, and contacting a seller.

## Frontend

The frontend of the application is built with Angular and uses Firebase Authentication for user authentication. A user can sign in and out using Google's authentication provider.

The user interface comprises multiple components including a contact page, a form for creating and editing listings, a page for viewing the details of a particular listing, a listings page, a personal listings page, and a navigation bar. All these components are arranged and controlled using Angular's robust component-based architecture.

The application uses an AngularFireAuth service to handle user authentication and to provide user details to other components and services. Listings are fetched, created, edited, and deleted using the ListingsService, which communicates with the backend via HTTP APIs.

The application is configured to proxy all API requests to the backend server running on localhost:8000, making the development process more seamless. The frontend and backend communicate using a predefined API, and the frontend updates in real time to reflect any changes to the listings.

In conclusion, this is a robust full-stack application providing a complete buy-and-sell experience to its users, demonstrating a good understanding of different technologies including Node.js, Hapi.js, Angular, Firebase, MySQL, and Docker.

### All listings page
![project2](https://github.com/samehjadda/marketplace-frontend/assets/106566093/d1105ea1-d56d-4142-9fcc-f16d01e56e00)
### My listings page
<img width="1408" alt="project2-1" src="https://github.com/samehjadda/marketplace-frontend/assets/106566093/0e507cc5-efc7-4969-9049-2f454a66ae94">

### Listing details page
<img width="1413" alt="project2-3" src="https://github.com/samehjadda/marketplace-frontend/assets/106566093/ccc8292e-640e-47cf-adde-57610e86480f">


# Marketplace

This project was generated with [Angular CLI], it has 2 parts, backend and front end

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


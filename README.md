# E-Commerce Application (MERN Stack)

## Overview
This project is a full-fledged e-commerce application built using the MERN (MongoDB, Express, React, Node.js) stack. The application features secure authentication, structured database schema, and a scalable backend API.

## Features
- *User Authentication*: Secure login and registration functionalities using JWT.
- *REST API*: Scalable API implementation with Express.js.
- *Database Schema Design*: Structured data models using MongoDB.
- *Backend Development*: Robust server-side logic built with Node.js and Express.
- *Frontend Development*: Interactive and responsive UI built with React.js.

## Tech Stack
- *Frontend*: React.js (with Hooks and Context API for state management)
- *Backend*: Node.js, Express.js
- *Database*: MongoDB (Mongoose ODM)
- *Authentication*: JWT (JSON Web Tokens) and bcrypt for password hashing
- *API Testing*: Postman or Thunder Client
- *Deployment*: (Optional) AWS, Vercel, Netlify, or Heroku

## Future Improvements
- Payment integration (PayPal, PhonePe, PayTm, etc.)
- Admin dashboard
- Order tracking system
- Reviews and ratings

# Milestone 1

* Completed foundation for E-commerce Application

# Milestone 2

* Separate folders for frontend and backend.
* A functional Login Page in the frontend.
* Completed setting for tailwind-css.

# Milestone 3

* Organized the *backend folder structure* for scalability.
* Connected the *server to MongoDB* using Mongoose.
* Implemented *error-handling middleware* for API stability.

# Milestone 4

* Created the **User Model** in Mongoose to define user data structure .
* Developed the **User Controller** to manage user authentication(signup,login).
* Implemented **Multer for file handling**, allowing user profile and product image uploads.

# Milestone 5

* Created the **Sign up page** in React and added code for signup backend also.
* Added the **Sign up page** validation in(signup,login).

# Milestone 6

* added the **password encryption** in backend signup page.
* added comparision for checking password is correct or not in login backend.

### *Milestone 7: Password Decrypt By Using Bcryptjs*
added the *Password authentication* in backend login page.
Here we are first getting the hashed password from db searched by email and then comparing the input body password with hashedd password by compare method in bycryptjs.


## *Milestone 8: Product Page In Frontend*
added the *Product Page* in Frontend as a Homepage.

## *Milestone 9: Created Form For Product Upload*
Created the **AddProducts** page in Frontend.
Added form validation.

## *Milestone 10: Created Schema product Upload*
Created **ProductModel** in backend.
Created the **productRouter** page in Backend.
Handeled file uploads by multer inside middleware multer.

## *Milestone 11: Created HOmepage For Product*
Created **Home page** for dynamic products presentation.
added the **backend** part for handling poducts (created endpoint to get products).

## *Milestone 12: Showing product according to user**
Created **Product Page** for dynamic products presentation according to user mail.
Created backend for specific user products.

## *Milestone 13: Created Product Update*
Created *Product Update Endpoint* for Updating products.
Created form for updating data in frontend and created autofill function.
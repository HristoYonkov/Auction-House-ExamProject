# Auction-House

SPA  made for SoftUni React course, created with 'React' as FrontEnd, Node.js as BackEnd and MongoDB as Database.

![](/AuctionHouse.PNG)

Informaton:

The app works as platform for post auction sales with basic functionality.
Every user(not logged in) have access to: Home , catalog , Search, Details, Register and Login.
Evry logged in user have acces to: Home, catalog, Search, Create Listing, Edit (if has own auction for edit, and no one bids the listing) and Logout.


TechStack



-Client
    React
    
    
    
-Server
    Node: 17.2.0
    ExpressJS: 4.18.2
    bcrypt: 5.1.0
    jsonwebtoken: 8.5.1,
    mongoose: 6.7.4,
    nodemon: 2.0.20

Setup

To run app, in directory "C:\Users\Hristo\Desktop\Auction-House-ExamProject\Auction-House\auction-house",  open inside cmd and run:

$ npm install

$ npm start

Which opens the app at http://localhost:3000 in your browser.
Also should run REST_API server.
Open directory "C:\Users\Hristo\Desktop\Auction-House-ExamProject\Auction-House\server", open inside cmd and run:

$ npm install

$ npm start

And the server will start listening at http://localhost:3030.


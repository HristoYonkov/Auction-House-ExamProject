# Auction-House

SPA  made for SoftUni React course, created with 'React' as FrontEnd, Node.js as BackEnd and MongoDB as Database.

![](/AuctionHouse.png)

Informaton:

The app works as platform for post auction sales with basic functionality.
Every user(not logged in) have access to: Home , catalog , Search, Details, Register and Login.
Evry logged in user have acces to: Home, catalog, details, Search, AddAuction, Edit (if current auction is owned by the user, and no one bids the auction). My-Auctions and Logout.

In details users (logged in and auction is not their own) can follow the current auction unfollow and bid it. In theit private page (MyAuctions) users can se wich auctions they are created wich are followed and wich they are won.
From MyAuctions logged in users can also delete the closed auctions iwch is opt-in in details page when they closed the auction. Closed auctions are appearred in published auctions with button delete!


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

# Setup

To run app, in directory "C:\Users\Hristo\Desktop\Auction-House-ExamProject\Auction-House\auction-house",  open inside cmd and run:

$ npm install

$ npm start

Which opens the app at http://localhost:3000 in your browser.
Also should run REST_API server.
Open directory "C:\Users\Hristo\Desktop\Auction-House-ExamProject\Auction-House\server", open inside cmd and run:

$ npm install

$ npm start

And the server will start listening at http://localhost:3030.

# Tests!

If you want to use some tests, to run it enter in "C:\Users\Hristo\Desktop\Auction-House-ExamProject\Auction-House\auction-house"
Open a new terminal and type..

$ npm test

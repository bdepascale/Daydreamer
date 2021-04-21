# Daydreamer

CEN3031 Software Engineering Spring 2021

Team 2 - DreamTeam

## Dependencies
* Axios
* Bcryptjs
* Colors
* Concurrently
* Dotenv
* Express
* Express-async-handler
* Howler
* Jsonwebtoken
* Mongoose
* Nodemon


## Running Repository locally

### `git clone <URL>`

First git clone the repository onto your local machine using the git clone command and the URL provided in this repository

### `npm install`

To install all of the APIs and dependencies. Use this command in the root folder as well as the frontend folder. This is because we separated the front and backend into two different folders for better

### `npm run dev`
 
To run the frontend and backend servers concurrently, use this command. localhost:3000 will display the UI of the website while localhost:5000 will display whether the backend is running properly or not.

## Software Architecture
This shows the planned architecture followed when developing this project.

### root
Here we have the circle.ci pipeline process engine as well as the frontend and backend of the website.

#### frontend 
The UI uses ReactJS as a framework. It uses use a Redux Pattern where the actions pass thorough a reducer to output components to pass the data back through the servers. Here are the src and public sub-directories:

* public
    * Where images and html are stored in the frontend.
* src
    * Where all the frontend UI components are stored. These include:
        * actions
            * Axios actions to send and receive data to the servers.
        * audioclips
            * Where audioclips are stored.
        * components
            * Where website components are stored, e.g. Header, Footer, Search bar, etc.
        * constants
            * Where Global constants are stored.
        * reducers
            * Used to calculate new state given the previous state and an action.
        * screens
            * Where the different subpages are stored.


#### backend
Here we have the server with Express. The each subdirectory has a purpose:

* config
    * Connecting to MongoDB.
* controllers
    * For API fetching and routing.
* data
    * sample product and users data.
* middleware
    * express-async-handlers. Turns Async actions into actions.
* models
    * Mongoose model schemas.
* routes
    * routes connecting frontend to database.
* utils
    * utility files.


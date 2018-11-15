# PSM
```PSM``` is a simple API that allows Users to store up population details of unique locations and return the total population of the location when requested for. The API allows for a one level deep nesting of locations.

## Dependencies
The functionality of this web app being a node.js app depends on the following technologies.

[**Express.js**](https://expressjs.com/): A Fast, opinionated, minimalist web framework for node which was used in routing this application.  
[**BodyParser**](https://babeljs.io/): This module was used to collect search data sent from the client side to the routing page.   
[**Babel**](https://babeljs.io/): This project is written in ES6, babel transpiles the code to ES5.  
[**Sequelize**](https://www.sequelizejs.com): Sequelize is a promise-based Node.js ORM for Postgres Server which is the database server for the APP . It features solid transaction support, relations, read replication and more.   
[**Postgresql**](https://www.postgresql.org/): PostgreSQL is a powerful, open source object-relational database system.


## Installation

1. Install nodejs, postgresql, sequelize-cli if not installed.
2. Navigate to the directory you want it installed to. cd your folder
3. Clone the repository ``` https://github.com/EmaEvidence/PSM.git ```.
4. Create a database(test and development) with PostgreSQL.
5. Open the PSM folder.
6. Create a .env file using the .envexample as a guide.
7. ``` npm install ``` to install all dependencies.
8. ``` npm run dev ``` to start the app in development mode.
9. ``` npm start ``` starts the app.
10. The app runs on port 6000
11. ``` npm run test ``` runs the unit test.

## The API.
The API exposes the following endpoints for consumption:  
  1. ```POST``` /location. The API takes the following parameters name, male, female, parentLocation. The parentLocation is optional, its only provided if the Location is to be nested to another location. It creates a location.   
  2. ```GET``` /locations. Retrieves every available location.  
  3. ```DELETE``` /location/:name. The API takes the following parameters name and it deletes the location with the provided name. If the location has other location nested to it, their parentLocation identity is set to null.   
  4. ```PUT``` /location/:name. The API takes the following parameters name, male, female, parentLocation. It edits the data of a location with the specified name 

The API documentation for this project can be found [here](https://populationsystemmanager.docs.apiary.io/#)

## Test  
API test is written with ``` jasmine ``` and ``` supertest ```.

## Limitations.
Locations nesting is currently a level deep.


## How to Contribute
The project is open for contribution. You can start by making location nesting more than 1 level deep. If you have other improvements you want to add, feel free to do so.

## FAQ
#### To which branch should I raise a PR?   
``` Every PR is to be raised against develop branch. ```   

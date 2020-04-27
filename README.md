Backend

Create Database file

npm init

/***********/
install npm json-serve

in package.json  include: "start": "json-server --watch db.json --port 3001"


/***** example ******/ 

{ "name": "backend", "version": "1.0.0", "description": "", "main": "index.js", "scripts": { "start": "json-server --watch db.json --port 3001" }, "keywords": [], "author": "", "license": "ISC", "dependencies": { "json-server": "^0.16.1" } }

Run `npm start` for a backend server. Navigate to `http://localhost:3001/`

/**********************/
create file with name db.json

insert this data
/***********/

{ "products": [ { "id": 1, "name": "Caneta BIC Preta", "price": 5.89 }, { "id": 2, "name": "Macbook Pro", "price": 2000 }, { "id": 3, "name": "Pc gamer", "price": 4000.89 }, { "name": "Novo produto Celular", "price": "10.99", "id": 4 }, { "name": "Produto 2008", "price": "234.54", "id": 5 }, { "name": "Geladeira 400 litros", "price": null, "id": 6 } ] }

/************/

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

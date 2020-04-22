# Backend

Create DB file

npm init

db.json

/***********/

{
  "products": [
    {
      "id": 1,
      "name": "Caneta BIC Preta",
      "price": 5.89
    },
    {
      "id": 2,
      "name": "Macbook Pro",
      "price": 2000
    },
    {
      "id": 3,
      "name": "Pc gamer",
      "price": 4000.89
    },
    {
      "name": "Novo produto Celular",
      "price": "10.99",
      "id": 4
    },
    {
      "name": "Produto 2008",
      "price": "234.54",
      "id": 5
    },
    {
      "name": "Geladeira 400 litros",
      "price": null,
      "id": 6
    }
  ]
}

/***********/

# install npm json-serve

/***********/
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch db.json --port 3001"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.16.1"
  }
}

/************/

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

----------

# Getting started

## Installation

Clone the repository

    git clone https://github.com/laurence702/c-fift.git

Switch to the repo folder

    cd c-fift
    
Install dependencies
    
    npm install
    npm install -f (if on Node v 16 and having issues)

Copy config file and set JsonWebToken secret key

    - Please type the below in your terminal from project directory
    cp src/config.ts.example src/config.ts
    
----------

## Database

The assessment api codebase contains examples of two different database abstractions, namely [TypeORM](http://typeorm.io/) and [Prisma](https://www.prisma.io/) dependending on what you prefer

----------

##### TypeORM

----------

Create a new mysql database with the name `nestjsrealworld`\
(or the name you specified in the ormconfig.json)

Copy TypeORM config example file for database settings

    cp ormconfig.json.example
    
Set mysql database settings in ormconfig.json

    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "your-mysql-username",
      "password": "your-mysql-password",
      "database": "assessmentapi",
      "entities": ["src/**/**.entity{.ts,.js}"],
      "synchronize": true
    }
    
Start local mysql server and create new database 'assessmentapi'

On application start, tables for all entities will be created in our case, assessment, questions, users

----------

##### Prisma

----------

To run the example with Prisma checkout branch `prisma`, remove the node_modules and run `npm install`

Create a new mysql database with the name `assessmentapi` (or the name you specified in `prisma/.env`)

Copy prisma config example file for database settings

    cp prisma/.env.example prisma/.env

Set mysql database settings in prisma/.env

    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

To create all tables in the new database make the database migration from the prisma schema defined in prisma/schema.prisma

    npx prisma migrate save --experimental
    npx prisma migrate up --experimental

Now generate the prisma client from the migrated database with the following command

    npx prisma generate

The database tables are now set up and the prisma client is generated. For more information see the docs:

- https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-mysql


----------

## NPM scripts

- `npm start` - Start application
- `npm run start:watch` - Start application in watch mode
- `npm run test` - run Jest test runner 
- `npm run start:prod` - Build application

----------

## Start application

- `npm start`
- create a user using this json structure
- 
- Test api with `http://localhost:3000/api/articles` in your favourite browser

----------

# Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token. Please check the following sources to learn more about JWT.

----------
 
# Swagger API docs

This example repo uses the NestJS swagger module for API documentation. [NestJS Swagger](https://github.com/nestjs/swagger) - [www.swagger.io](https://swagger.io/)        

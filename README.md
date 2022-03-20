<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [License](#license)


# About the Project
> API built with NestJS with functionalities like creating Problems, User Authentication with Private Routes, Create Submission related to a specific problem.
> <br>
> Nest.Js, Express.Js are the frameworks used in this API <br>
> <br>




## Getting Started
  ### Description

  [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
  <br>
  

  ### Installation

  ```bash
  $ npm install
  ```

  ### Running the app

  ```bash
  # clone the project
  $ git clone https://github.com/gitnoober/YouCode.git

  # Setting Up Database
  # create A Postgres Schema with the credentials in ormconfig.ts or change it according to your preference.

  # create the tables
  $ npm run db:migrate 

  # create sample data
  $ npm run db:seed

  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
  ```

  ### Test

  ```bash
  # unit tests
  $ npm run test

  # e2e tests
  $ npm run test:e2e

  # test coverage
  $ npm run test:cov
  ```

  ### Support

  Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## API Endpoints
  ### Public Postman JSON Link
  ```
    https://www.getpostman.com/collections/87290a3f4a0718578fe3
  ```
  
  ### Summary
  ```
  - http://localhost:3000/users - Create User
  - http://localhost:3000/users/login - Login Through Email
  - http://localhost:3000/user - Get Current User
  - http://localhost:3000/user - Update User Details
  - http://localhost:3000/articles - Create Problem Article
  - http://localhost:3000/submissions?articleId={{articleId}} - Create Problem Submissions
  - http://localhost:3000/articles/{{slug}} - Get Article By Slug
  - http://localhost:3000/articles/{{slug}} - Delete Article By Slug
  - http://localhost:3000/articles/{{slug}} - Update Article By Slug
  - http://localhost:3000/articles - Get Problem Articles (optional query params - limit, offset, author, tags)
  ```


## License

Nest is [MIT licensed](LICENSE).

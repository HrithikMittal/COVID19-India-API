# COVID19-India-API

[https://covid19-india-adhikansh.herokuapp.com/summary](https://covid19-india-adhikansh.herokuapp.com/)

This repo is created to get all the details of COVID-19 in India. These API will
help to get the details of states in India. The routes for the API are mentioned
below:

## Prerequisites

To work with the api you must have to install the following:

- [NodeJS](https://nodejs.org/en/download/) - Node.js® is a JavaScript runtime
  built on Chrome's V8 JavaScript engine.
- [MongoDB Server](https://docs.mongodb.com/manual/installation/) - NoSql
  Database and server
- [Postman](https://www.getpostman.com/downloads/) - API development environment

## Installation

Before doing anything you have to clone or download and unzip the project
folder, open terminal and navigate to the project folder and run:

```bash
npm install
```

This will install all the dependencies required by the project.

## Getting Started

To start using this API, start your local database server, open terminal and
navigate to the project folder and run:

```bash
npm run start
```

If an error occur, check your database server or check if you have installed the
prerequisites correctly.

If there was no error, open Postman and create and send a new get request to:

```
http://localhost:3000/
```

Expected Output:

```
{
	message: "Welcome!"
}
```

## Response

```
{
  name:'name_of_state',
  confirmedNational:'Total Confirmed cases (Indian National)',
  confirmedInternational:'Total Confirmed cases ( Foreign National )',
  cured:'Cured/Discharged/Migrated',
  death:'Death',
  total:'Total Cases'
}
```

## Routes

| S.No. | Route             | Method | Description                                       |
| ----- | ----------------- | ------ | ------------------------------------------------- |
| 1.    | /                 | GET    | Welcome to APIs                                   |
| 2.    | /summary          | GET    | Total data containing deaths and cases in India   |
| 3.    | /states           | GET    | Total data of all states                          |
| 4.    | /state/:statename | GET    | Get state details                                 |
| 5.    | /latest           | GET    | Get Latest Data with Comparision of previous date |

## Deployment [click me](https://covid19-india-adhikansh.herokuapp.com/)

This api can be hosted on platform like heroku, aws, and others. MongoDB Atlas
or Matlab can be used for remote database.<br /> For instance, the application
can be deployed on [Heroku](https://signup.heroku.com/login) by creating and
registering an account. Following, create a new app and choose a deployment
method (terminal or github) and follow the instruction there. Remote database
can be created using Mongodb Atlas or Matlab.<br /> For
[Mongodb Atlas](https://cloud.mongodb.com/user?_ga=2.185306281.1809166196.1559570784-2125252051.1557828824#/atlas/register/accountProfile),
you need to just to create your account and make a new cluster and link the
cluster to your application through a URL. Following the given steps, you would
have a remote application up and running.

## Data Source

[This](https://www.mohfw.gov.in/) is the source of data for the APIs. This data
is officially provide by the Govt. of India.

## Language Wrappers Available

- <a href="https://www.npmjs.com/package/covidindia">JavaScript Module</a>
  available on NPM, developed by
  <a href="https://github.com/abhinavmir/">@abhinavmir</a>.

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

If you are the helping and contributing one, your efforts and suggestion are
always welcomed.

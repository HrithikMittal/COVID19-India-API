# COVID19-India-API
This repo is created to get all the details of COVID-19 in India. These API will help to get the details of states in India. The routes for the API are mentioned below:

# Response
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

# Routes

| S.No. | Route             | Method | Description                                      |
|-------|-------------------|--------|--------------------------------------------------|
| 1.    | /                 | GET    | Welcome to APIs                                  |
| 2.    | /summary          | GET    | Total data containing deaths and cases in India  |
| 3.    | /states           | GET    | Total data of all states                         |
| 4.    | /state/:statename | GET    | Get state details                                |
| 5.    | /latest           | GET    | Get Latest Data with Comparision of previous date|

## [Deployment](https://covid19-india-adhikansh.herokuapp.com/)

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

# Data Source
[This](https://www.mohfw.gov.in/) is the source of data for the APIs. This data is officially provide by the Govt. of India.

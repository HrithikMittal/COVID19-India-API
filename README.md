# COVID19-India-API
### This repo is created to get all the details of COVID-19 in India. These API will help to get the details of states in India. The routes for the API are mentioned below:

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

| S.No. | Route             | Method | Description                                     |
|-------|-------------------|--------|-------------------------------------------------|
| 1.    | /                 | GET    | Welcome to APIs                                 |
| 2.    | /summary          | GET    | Total data containing deaths and cases in India |
| 3.    | /states           | GET    | Total data of all states                        |
| 4.    | /state/:statename | GET    | Get state details                               |


# Data Source
[This](https://www.mohfw.gov.in/) is the source of data for the APIs. This data is officially provide by the Govt. of India.

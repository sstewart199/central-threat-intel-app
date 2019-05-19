# Central Threat Intelligence App!

Hi! 👋 I hope you enjoy my application. The idea of this application is to have a central place for someone who wants to investigate an IP address to gather information. The internet is full of lots of different threat intelligence feeds however we have to go to multiple different locations to collect the information.
With this application you can insert an I.P address and it will gather information from multiple locations.

For v1 of CTIA (Central Threat Intelligence App) I have hooked up two feeds the [IBM XFE - X-Force Exchange](https://exchange.xforce.ibmcloud.com/) and [AbuseIPDB](https://www.abuseipdb.com/).

CTIP will also display a map of the world showing the location of the IP Address.


#  How to Setup and Run
You must setup and start both the UI and Server

###  UI
-  `cd ./ui` from the root of this project
-  `yarn`
-  `yarn dev` Once the project has compiled you should see "compiled successfully!"


### GraphQL/Express Server
-  `cd ./server` from the root of this project
-  `yarn`
-  `yarn dev` Once the project has compiled you should see "GraphQL server ready at http://localhost:3600/graphql"

### Authentication
`/server/.env` file contains:
- XFORCE_API_KEY - This is the api key found on XFE website
- XFORCE_API_PASS - This is the api pass found on XFE website
- ABUSEIP_KEY - AbuseIPDB key required to authenticate with API

**For the case of demonstration purposes I will include the ENV variables in the commit so that you will not have to sign up to the multiple feeds. I will remove them at a later date**

### View in browser
Now when you visit [http://localhost:3600/graphql](http://localhost:3600/graphql) you should see our graphql playground for our threat feeds.
And when you visit [http://localhost:3000/](http://localhost:3000/) you will see the UI for CTIA.



#  Tech Stack

##  FrontEnd

The frontend of this application has been built using:

-  React, for simplisity I used CRA (Create React App).
-  Apollo -Client side library for GraphQL queries
-  Carbon Components - Open Source free component library
-  Plotly.js - D3.js based library for graphs and Maps
-  .SCSS - For styling of components
-  eslint - lint testing, went for airbnb, react and react-hooks plugin
-  **???? Unit Testing Framework**

  

##  Backend/Service Layer

The Service Layer of the application has been built using:

-  Apollo-Server - This is the apollo server for graphql
-  express - With express it leaves us open to add additional non-graphql routes at any time
-  axios - Axios promise based http client, used to communicate with xfe and AbuseIPDB
-  babel - Used to bundle our node application
-  eslint - lint testing, went for airbnb/base, which means we dont require plugins such as react/react-hooks
-  Jest - Unit testing framework

#  Testing Framework




# Travis

[![Build Status](https://travis-ci.com/sstewart199/central-threat-intel-app.svg?branch=dev)](https://travis-ci.com/sstewart199/central-threat-intel-app)

Travis does the following:
- Tests the ui package unit tests
- Tests the ui package eslint
- Tests the ui package stylint
- Tests the server package unit tests
- Tests the server package eslint

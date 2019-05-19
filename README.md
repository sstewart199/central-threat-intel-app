# Central Threat Intelligence App! [![Build Status](https://travis-ci.com/sstewart199/central-threat-intel-app.svg?branch=dev)](https://travis-ci.com/sstewart199/central-threat-intel-app)

Hi! 👋 I hope you enjoy my application. The idea of this application is to have a central place for someone who wants to investigate an IP address to gather information. The internet is full of lots of different threat intelligence feeds however we have to go to multiple different locations to collect the information.
With this application you can insert an I.P address and it will gather information from multiple locations.

For v1 of CTIA (Central Threat Intelligence App) I have hooked up two feeds the [IBM XFE - X-Force Exchange](https://exchange.xforce.ibmcloud.com/) and [AbuseIPDB](https://www.abuseipdb.com/).

CTIA will also display a map of the world showing the location of the IP Address.


#  How to Setup and Run
You must setup and start both the UI and Server, the only requirement before setting up the project is that you have Yarn installed.
[Info to install Yarn can be found here.](https://yarnpkg.com/en/docs/install#mac-stable)

### Authentication
First we must set up our authentication details to connect to the multiple threat feeds these are located at:
`/server/.env` the file contains:
- XFORCE_API_KEY - This is the api key found on XFE website
- XFORCE_API_PASS - This is the api pass found on XFE website
- ABUSEIP_KEY - AbuseIPDB key required to authenticate with API

**For the case of demonstration purposes I will include the ENV variables in the commit so that you will not have to sign up to the multiple feeds. I will remove them at a later date**


###  Setup and Start UI
-  `cd ./ui` from the root of this project
-  `yarn`
-  `yarn dev` Once the project has compiled you should see "compiled successfully!"


### Setup and Start GraphQL/Express Server
-  `cd ./server` from the root of this project
-  `yarn`
-  `yarn dev` Once the project has compiled you should see "GraphQL server ready at http://localhost:3600/graphql"


### View in browser
Graphql Playground is available at: [http://localhost:3600/graphql](http://localhost:3600/graphql)
CITA UI will be available at: [http://localhost:3000/](http://localhost:3000/)

### How to use the Application
When you visit [http://localhost:3000/](http://localhost:3000/) you will see a simple search box.
When you insert a valid IP Address it will then go off and query the multiple threat feeds collecting information. 
The UI should populate as each Feed returns information, a map is also included at the bottom of the page which will show the location of the IP address.



#  Tech Stack

##  FrontEnd

The frontend of this application has been built using:

-  React - for simplicity I used CRA (Create React App).
-  Apollo - Client side library for GraphQL queries
-  Carbon Components - Open Source free component library
-  Plotly.js - D3.js based library for graphs and Maps
-  .SCSS - For styling of components
-  eslint - lint testing, went for airbnb, react and react-hooks plugin
-  react-testing-library - Testing library: Prefer this over enzyme, as it does not allow shallow rendering which means you are forced to mock

  

##  Backend/Service Layer

The Service Layer of the application has been built using:

-  javascript/node.js - I used basic babel settings to transpile
-  Apollo-Server - This is the apollo server for graphql
-  express - With express it leaves us open to add additional non-graphql routes at any time
-  axios - Axios promise based http client, used to communicate with xfe and AbuseIPDB
-  babel - Used to bundle our node application
-  eslint - lint testing, went for airbnb/base, which means we do not require plugins such as react/react-hooks
-  Jest - Unit testing framework

#  Testing Framework

### Automation E2E Tests

For Automated E2E tests I decided to you codeceptjs. It is an extremely lightweight wrapper for webdriver.io and makes testing extremely
easy and enjoyable.
You will need 4 processes running to run the automated E2E tests. The UI, the server, selenium standalone server and then the automation itself.
- First `cd ui` and `yarn dev`
- In another terminal `cd server` and `yarn dev`
- Now open another terminal and `cd ui` and `yarn automation:server` this will setup and run the server
- Finally `cd ui` and `yarn automation:run` this will run the suite of tests extremely fast.

### Frontend
- react-testing-library along with Jest has been used  to test the frontend components
- Each component under /src/components have a `__test__` directory
- Some of these folders also contain a `mocks` folder as we can mock out the response from the appollo graphql queries for these components

### Appollo GraphQL Service Tier
- Jest, jest-specific-snapshot and appollo-server-testing where used to test the graphql server
- We begin by doing sanity tests on our typeDefs to ensure that they are correct. For this we use snapshots generated by jest, we then use jest-specific-snapshot which has a function toMatchSpecificSnapshot which compares what is returned from the typeDef and what is in the snapshot.
- For our resolver tests we add `__test__` folder under each resolver in `src/resolvers/` with these tests we ae ensuring that the information returned from the resolvers is what we would expect.


# Travis

[![Build Status](https://travis-ci.com/sstewart199/central-threat-intel-app.svg?branch=dev)](https://travis-ci.com/sstewart199/central-threat-intel-app)

Travis does the following:
- Tests the ui package unit tests
- Tests the ui package eslint
- Tests the ui package stylelint
- Tests the server package unit tests
- Tests the server package eslint

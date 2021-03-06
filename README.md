
## My-Flix
This is an adventure into React hooks as I have been stuck in the Angular world for a few years.
There are a couple of quirks in the UI, with time I will resolve these.

A running version of it can be viewed ----> [here](https://calm-desert-023948f10.azurestaticapps.net/)


## Technologoies Used
* Node.js 16.13.0 LTS
* React 17.0.2
* React Router
* React Bootstrap 5.1.3
* [Jest](https://jestjs.io/docs/api) 
* [React Testing Library](https://testing-library.com/docs/react-testing-library/)

* Azure (Linux Web App)
* Github Actions for CI


## Setting up your Environment (Windows)    
Steps:
    1. Install Visual Studio Code from [here](https://code.visualstudio.com/)
    2. Have a new version of node from [here](https://nodejs.org/en/)


## How to run the application
    1. Download the project from GitHub
    2. Open the project in Visual Studio Code at the 'ReactDemo' root directory 
    3. Install all the NPM Packages locally in the terminal window (Terminal > New) by entering:
      > npm install
    4. Add an file to the root src directory named '.env' and add the following line with your API key:
    REACT_APP_OMDBAPI_API_KEY = "your api key goes here"
    5. Build the project (this is required to populate the env variables):
      > npm run-script build
    5. Run the project:
      > npm start
    6. Navigate to http://localhost:3000/


## How to run the Tests
    1. From the terminal window run the following command:
      > npm test


## API Reference
[OMDb API](https://www.omdbapi.com/)


## Project Creation / Libraries 
    Create the Project using [create-react-app](https://create-react-app.dev/docs/)
       > npx create-react-app my-flix

    Install [React Bootstrap](https://react-bootstrap.github.io/)
       > npm install react-bootstrap bootstrap@5.1.3

    Install React Router
       > npm install react-router-dom


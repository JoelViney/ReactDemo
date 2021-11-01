
## MyFlix

I am a bit rusty as I have been in Angular world for 3 years... I hope it doesn't show. Guessing it will.


## How to run the application
    1. Download the project from GitHub
    2. Open the project in Visual Studio Code at the 'ReactDemo' root directory 
    3. Install all the NPM Packages locally in the terminal window by entering:
        > npm install
    4. Add an file to the root src directory named '.env' and add the following line with your API key:
        REACT_APP_OMDBAPI_API_KEY = "your api key goes here"
    5. Build the project:
        > npm run-script build
    5. Run the project:
        > npm start
    6. Navigate to http://localhost:3000/


## Technologoies Used
    * Node.js 16.13.0 LTS
    * React 17.0.2
    * React Bootstrap 5.1.3
    * Axios 0.24.0


## API
    [OMDb API](https://www.omdbapi.com/)
 

## Project Creation / Libraries

Create the Project
    > npx create-react-app my-flix

Install [React Bootstrap] (https://react-bootstrap.github.io/)
    > npm install react-bootstrap bootstrap@5.1.3

Install [Axios](https://www.npmjs.com/package/axios)
    > npm install axios

    Note for typescript use:
    Typescript: const axios = require('axios').default;

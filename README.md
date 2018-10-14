# EBI-Task

## Getting started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

The following software is required to be installed on your system:

- Node 8.x
- Npm 3.x
- [Git](https://git-scm.com)

Type the following commands in the terminal to verify your node and npm versions

    node -v
    npm -v

### Install

Follow the following steps to get application environment running.

- Clone 'ebi-task' repository from GitHub
  HTTP:

      git clone https://github.com/msmanoj/ebi-task.git

  SSH:

      git clone git@github.com:msmanoj/ebi-task.git

* Install node modules

      cd ebi-task
      npm install

### Run

To start the applicatin:

    npm start

## Links

- View the live version of this application [here](https://msmanoj.github.io/ebi-task/).
- View the GitHub Repository [here](https://github.com/msmanoj/ebi-task)

## Functionality overview

This is a basic appliaiton that makes used of the Ensembl REST APIs to get a a list of Transcrips based on the vinput given by the user. Search functionalities that are currently supported are:

1. Transcripts by Gene Symbol
2. Trnascripts by HGVS Nomenclature

**General functionality:**

1. Transcripts by Gene Symbol
   A page with a form that takes in the following information: - A gene symbol e.g. BRAF - A position in a protein sequence e.g. 600 - An amino acid letter e.g. V.

   The values entered above is processed and all transcripts from that gene with the given amino acid at the specified position is obtained from the Ensemble REST API. For each a link to the Ensembl website is displayed in a table.

2. Transcripts by HGVS Nomenclature
   A page with a form that takes in the following HGVS nomenclature used to represent variation within a protein sequence. The value entered is first validated and then processed. Once it is processed, the link to transcritps matching the given HGVS nomenclature value is displayed to the user.

## Developed With

- [Node.js](https://nodejs.org/en/) - Javascript runtime
- [create-react-app](https://github.com/facebook/create-react-app) - A tool allows you to quickly create & run React applications with no configuration.
- [React](https://reactjs.org/) - A javascript library for building user interfaces
- [Babel](https://babeljs.io/) - A transpiler for javascript
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [MATERIAL-UI](https://material-ui.com/) - React components that implement Google's Material Design.
- [Awesome Debounce Promise](https://github.com/slorber/awesome-debounce-promise/) - Debounce your async calls with React in mind.

## Architectural Decisions

### React Directory structure - Directory per view

- Code isolation
- Clear view of the structure of the application
- Better choice for a small application

### Material UI

- Faster development process by avoiding DRY
- Better choice when we do not have a spcific design standard
- Clear documentation and less complex

### Axios - To make external API calls

- Easy to abort a previously made request. Works pretty well when used along with 'Awesome Debounce Promise'
- Performs automatic JSON data transformation

### Single Responsibility Component

- Improves expandability
- Code isolation and reduced dependency
- Easier to understand a purpose of a component

### Encapsulation - Lose Coupling

- Components should hide the internal structure as much as possible and have less knowledge about other components.
- This makes the components less coupled and easier to test

### Pure Functions

- Methods should be pure or almost pure whereever possible
- This will make the result of the methods to be more stable and predictable

### Defining PropTypes

- It is a good practice to define all the prop types in all the components as it will reduce the number of errors in the development phase

## Testing

### Unit Tests and Coverage

- It is better to automate the testing procees during the development stage as manual testing will get more complex as the scope of the application grows.
- Almost all the components and methods needs to be included in the tests regardless of thir size and complexity.

### Run

To run the tests:

    npm test

### Production Testing

- Regression testing will be required after deploying on to the production environment.

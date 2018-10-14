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

- Clone 'ebi-task' repository from BitBucket
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

## Functionality overview

This is a basic appliaiton that makes used of the Ensembl REST APIs to get a a list of Transcrips based on the vinput given by the user. Search functionalities that are currently supported are:

1. Transcripts by Gene Symbol
2. Trnascripts by HGVS Nomenclature

**General functionality:**

1. Transcripts by Gene Symbol
   A page with a form that takes in the following information: - A gene symbol e.g. BRAF - A position in a protein sequence e.g. 600 - An amino acid letter e.g. V

The values entered above is processed and all transcripts from that gene with the given amino acid at the specified position is obtained from the Ensemble REST API. For each a link to the Ensembl website is displayed in a table.

2. Transcripts by HGVS Nomenclature
   A page with a form that takes in the following HGVS nomenclature used to represent variation within a protein sequence. The value entered is first validated and then processed. Once it is processed, the link to transcritps matching the given HGVS nomenclature value is displayed to the user.

## Developed With

- [Node.js](https://nodejs.org/en/) - Javascript runtime
- [create-react-app](https://github.com/facebook/create-react-app) - A tool allows you to quickly create & run React applications with no configuration.
- [React](https://reactjs.org/) - A javascript library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Babel](https://babeljs.io/) - A transpiler for javascript
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [Immutable](https://facebook.github.io/immutable-js/) - Immutable collections for JavaScript
- [Materialize](https://materializecss.com/) - A modern responsive _CSS_ framework based on Material Design by Google.
- [Moment](https://momentjs.com/) - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - A React wrapper for Chart.js 2

### Architectural Decisions

## Material UI ( vs Bootstrap vs custom CSS )

- Better choice when we need to focus more on UI/UX
- Clear documentation and less complex
- Faster development process

## ImmutableJS (vs ES6)

- Easier to develop and maintain
- We don't end up accidentally mutating the data

## React Directory structure - Directory per view (vs Atomic structure)

- Code isolation
- Clear view of the structure of the application
- Better choice for a small application

## Thunk (vs Saga)

- Easy to use and clear to understand the code
- Better choice for a simple application

## Redux (vs MboX)

- Predictable state updates make it easier to understand how the data flow works in the application
- Centralizing the state makes it easier to implement things like logging changes to the data, or persisting data between page refreshes
- Redux library is pretty small. Most of the time you are dealing only with plain JavaScript objects and arrays. It is closer to vanilla JavaScript than MobX.

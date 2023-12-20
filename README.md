
# Frontend test assignment

## Description
An Ember.js application that dynamically loads tabular data with two dynamic columns. 

## Prerequisites
Before you begin, ensure you have met the following requirements:
* You have installed [Node.js](https://nodejs.org/en/) (which includes npm).
* You have installed [Ember CLI](https://ember-cli.com/).

## Installation

To install the application, follow these steps:

1. Clone the repository:
`git clone https://github.com/VaneSkubic/frontend-test-assignment`

2. Navigate to the application directory:
`cd frontend-test-assignment`

3. Install the dependencies:
`npm install`

## Running the Application 
To run the application on your local machine: 

1.  Start the Ember server:
`ember serve`

2. Open your browser and navigate to `http://localhost:4200`

## Assumptions and Design Decisions

### API Design

1. **Single Endpoint**: The application's backend API has been designed with a single endpoint to serve the necessary data for the frontend. 

2. **Data Merging**: On the backend, data from two separate files (`keywords-results` and `competitors-data`) are merged before being sent to the frontend. This approach ensures that the frontend receives a consolidated view of the data, necessary for displaying in the table, without the need to perform complex data manipulations client-side.

### Assumptions

4. **Dynamic Columns Interpretation**: It was assumed that a 'dynamic' column refers to a column whose values are calculated based on data from another file, linked by the ID of the keyword (in this case from `competitors-data.json`). 

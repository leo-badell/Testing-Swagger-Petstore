Cypress API Testing Project

This Cypress testing project is dedicated to thoroughly testing various endpoints of the Swagger Petstore API. It encompasses different test cases for both cy.request and cy.api methods, utilizing custom commands in some of them for enhanced functionality.

**pet.cy.js**
![Captura de tela 2023-11-02 120518](https://github.com/leo-badell/Testing-Swagger-Petstore/assets/91019951/5e86a6e1-51f0-4982-aa87-aca29d85e6d1)

This file contains tests for the Swagger Petstore API related to pets.

Creating a New Pet (POST): Verifies that a new pet can be created with a POST request, ensuring that the response status code is 200.

Updating Pet Name (PUT): Tests the ability to update the name of a pet with a PUT request, asserting the status code and the updated name.

Finding Pets by Status (GET): Tests the API endpoint for finding pets by status, confirming that the response status code is 200.

Finding Pets by ID (GET): Checks the ability to find pets by their ID, ensuring that the response status code is 200.

Updating a Pet with Form Data (cy.request): Verifies the capability to update a pet in the store using form data, with additional checks on the response properties.

Deleting a Pet (cy.request): Tests the deletion of a pet from the store, ensuring a successful response.

**store.cy.js**
![Captura de tela 2023-11-02 120625](https://github.com/leo-badell/Testing-Swagger-Petstore/assets/91019951/46049ae2-5c95-45ac-804c-04985006a771)

This file contains tests for the Swagger Petstore API related to store operations.

Placing an Order for a Pet (cy.request): Tests the ability to place an order for a pet, with extensive validation of the response data.

Finding a Purchase Order by ID (cy.request): Tests the API endpoint for finding a purchase order by its ID, ensuring the response contains the expected data.

Deleting a Purchase Order by ID (cy.request): Verifies the ability to delete a purchase order by its ID and checks that the operation is successful.

Getting Inventory (cy.request): Tests the API endpoint for retrieving inventory data and validates the response data against expected properties.

**user.cy.js**
![Captura de tela 2023-11-02 120657](https://github.com/leo-badell/Testing-Swagger-Petstore/assets/91019951/d18f2ded-8005-4004-a01f-1f89a462ade9)

This file contains tests for the Swagger Petstore API related to user management, demonstrating both custom commands and cy.api requests.

Creating a List of Users with Given Input Array: Utilizes a custom command to create a list of users and verifies that the operation returns a 200 status.

Logging a User into the System (cy.api): Tests the login functionality of the system using a cy.api request, ensuring a successful response.

Updating a User (cy.api): Tests the ability to update user information using a cy.api request and validates the response status code.

Deleting a User (cy.api): Verifies the deletion of a user using a cy.api request, ensuring a successful operation.

Custom Commands (commands.js):

createNewPet: A custom command for creating a new pet in the Swagger Petstore.
updatePetName: A custom command for updating the name of a pet in the Swagger Petstore.
useBaseUrl2: A custom command for performing requests to find pets by status.
useBaseUrl3: A custom command for performing requests to find pets by ID.
createUser: A custom command for creating a list of users with given input data.
This Cypress project serves as a comprehensive set of tests for the Swagger Petstore API, including various request methods and validations.

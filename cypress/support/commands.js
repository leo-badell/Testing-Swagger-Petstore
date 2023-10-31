// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Add a new pet to the store | POST /pet
Cypress.Commands.add('createNewPet', () => {
    cy.fixture('NewPet.json').then((NewPet) => {
      cy.request({
        method: 'POST',
        url: Cypress.env('useBaseUrl'),
        body: NewPet,
        followRedirect: true,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });

//Update an existing pet | PUT /pet
  Cypress.Commands.add('updatePetName', (newName) => {
    cy.fixture('PUTNewPet.json').then((NewPet) => {
      NewPet.name = newName;
      cy.request({
        method: 'PUT',
        url: Cypress.env('useBaseUrl'),
        body: NewPet,
        followRedirect: true,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });

  //Finds Pets by status
  Cypress.Commands.add('useBaseUrl2', () => {
      cy.request({
        method: 'GET',
        url: Cypress.env('useBaseUrl2'),
        followRedirect: true,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });

//Finds Pets by ID
  Cypress.Commands.add('useBaseUrl3', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('useBaseUrl3'),
      followRedirect: true,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  Cypress.Commands.add('createUser', () => {
    cy.fixture('createUser.json').then((createUser) => {
      cy.api({
        method: 'POST',
        url: Cypress.env('useBaseUrl4'),
        body: createUser,
        followRedirect: true,
        failOnStatusCode: false
      }).then(response => { return response }); 
      });
    });
  

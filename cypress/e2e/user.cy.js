// This file contains tests with the cy.api method

// This code contains custom command in the commands.js file
describe('Testing the Swagger Petstore', () => {
  it('Creates list of users with given input array', () => {
    cy.fixture('createUser.json').then((createUser) => {
      cy.createUser({ body: createUser }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
});

// This is a cy.api request that doesn't have a custom command
describe('Logs user into the system', () => {
  it('Should login user', () => {
    const bodyRequest = {
      "username": "ronny",
      "password": "88888",
    };

    cy.api({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/login',
      headers: {
        'content-type': 'application/json'
      },
      body: bodyRequest,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

// This is a cy.api request that doesn't have a custom command
describe('Should update user', () => {
  it('Should update user', () => {
    const bodyRequest = {
      "id": 10,
      "username": "Roger",
      "firstName": "Ronnie",
      "lastName": "Dio",
      "email": "rdio@fakemail.com",
      "password": "88888",
      "phone": "88888",
      "userStatus": 1
    };

    cy.api({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/user/Roger',
      headers: {
        'content-type': 'application/json'
      },
      body: bodyRequest,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});


describe('Should delete user', () => {
  it('Should delete user', () => {
    cy.api({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/user/Roger',
      headers: {
        'content-type': 'application/json'
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
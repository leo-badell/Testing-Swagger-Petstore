
describe('Testing the Swagger Petstore', () => {
  it('Should return a new pet with POST method', () => {
    cy.fixture('NewPet.json').then((NewPet) => {
      cy.createNewPet({ body: NewPet }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
});


describe('Testing the Swagger Petstore', () => {
  it('Should update the name of a pet with PUT method', () => {
    cy.fixture('PUTNewPet.json').then((PUTNewPet) => {
      const newName = 'Amane';
      cy.updatePetName(newName, PUTNewPet).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal(newName);
      });
    });
  });
});


describe('Testing the Swagger Petstore', () => {
  it('Should Find Pets by status', () => {
      const status = 'pending';
      cy.useBaseUrl2({ status }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });


describe('Testing the Swagger Petstore', () => {
  it('Should Find Pets by ID', () => {
      const ID = '8979789078978969';
        cy.useBaseUrl3({ ID }).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
    });

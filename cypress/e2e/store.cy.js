//This cy.request doesn't have Custom Command on the support/commands.js
it('Should place an order for a pet', () => {
    const bodyRequest = {
      "id": 10,
      "petId": 198772,
      "quantity": 5,
      "shipDate": "2023-10-26T11:15:48.034Z",
      "status": "approved",
      "complete": true
    }
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/store/order',
      headers: {
        'content-type': 'application/json'
      },
      body: bodyRequest,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.be.a('number')
      expect(response.body.petId).to.be.a('number')
      expect(response.body.quantity).to.be.a('number')
      expect(response.body.shipDate).to.be.a('string')
      expect(response.body.status).to.be.a('string')
      expect(response.body.complete).to.be.a('boolean')
    })
  });

  //This cy.request doesn't have Custom Command on the support/commands.js
    it('Should find purchase order by ID', () => {
        const ID = '7';
        cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/store/order/${ID}`,
        headers: {
            'content-type': 'application/json'
        },
        }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.be.a('number')
        expect(response.body.petId).to.be.a('number')
        expect(response.body.quantity).to.be.a('number')
        expect(response.body.status).to.be.a('string')
        expect(response.body.complete).to.be.a('boolean')
        })
    });

    //This cy.request doesn't have Custom Command on the support/commands.js
    it('Should delete purchase order by ID', () => {
        const ID = '7';
        cy.request({
        method: 'DELETE',
        url: `https://petstore.swagger.io/v2/store/order/${ID}`,
        headers: {
            'content-type': 'application/json'
        },
        }).then((response) => {
        expect(response.status).to.equal(200);
        })
    });

    //This cy.request doesn't have Custom Command on the support/commands.js
    it('Should get inventory', () => {
        const bodyRequest = 
            {
                "sold": 12,
                "string": 617,
                "pending": 2,
                "available": 264,
                "totvsRuan": 7,
                "peric": 90,
                "Not available": 1
              }
        cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/store/inventory`,
        headers: {
            'content-type': 'application/json'
        },
        body: bodyRequest,
        }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.sold).to.be.a('number');
        expect(response.body.string).to.be.a('number');
        expect(response.body.pending).to.be.a('number');
        expect(response.body.available).to.be.a('number');
        expect(response.body.totvsRuan).to.be.a('number');
        expect(response.body.peric).to.be.a('number');
        expect(response.body['Not available']).to.be.a('undefined');
        
        })
    });

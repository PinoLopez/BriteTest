describe('Invalid ID Berry API Call', () => {
  it('should return an error for an invalid ID', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/berry/invalid_id',
      failOnStatusCode: false,
    }).should((response) => {
      expect(response.status).to.eq(404); 
    });
  });
});
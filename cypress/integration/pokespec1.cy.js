// validIdBerry.spec.js
describe('Valid ID Berry API Call', () => {
  it('should return expected data for a valid ID', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/berry/1')
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });
});

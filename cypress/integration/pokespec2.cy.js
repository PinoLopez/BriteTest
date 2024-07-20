describe('Valid ID Berry API Call', () => {
  it('should return expected data for a valid ID', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/berry/2')
      .should((response) => {
        expect(response.status).to.eq(200);
        // Add more assertions based on the expected data
      });
  });
});
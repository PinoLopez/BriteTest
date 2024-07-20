describe('PokeAPI Berry Flavor Spec', () => 
{
  it('passes', () => {
    // Call the PokeAPI with a valid berry flavor ID or name
    cy.request('https://pokeapi.co/api/v2/berry-flavor/spicy').then((response) => 
    {
      // Ensure we get the expected response
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'spicy')
      const berries = response.body.berries
      let highestPotencyBerry = null
      // Find the berry with the highest potency
      berries.forEach((berry) => {
        if (!highestPotencyBerry || berry.potency > highestPotencyBerry.potency) 
        {
          highestPotencyBerry = berry
        }
      })
      // Ensure we found a berry
      expect(highestPotencyBerry).to.not.be.null
      // Call the PokeAPI to get details of the berry with the highest potency
      cy.request(`https://pokeapi.co/api/v2/berry/${highestPotencyBerry.berry.name}`).then((berryResponse) => {
        // Ensure we get the expected response
        expect(berryResponse.status).to.eq(200)
        expect(berryResponse.body).to.have.property('name', highestPotencyBerry.berry.name)
      })
    })
  })
})
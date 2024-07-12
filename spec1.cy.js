describe('first spec: Nicolas Cage', () => 
{
  it('passes', () => 
  {
    cy.visit('https://www.imdb.com/')
    cy.get('input[type="text"]').type('Nicolas Cage')
    cy.get('button[type="submit"]').click()
    cy.get('a[href="/name/nm0000115/?ref_=fn_al_nm_1"]').click()
    cy.contains('Credits').click()
    cy.visit('https://www.imdb.com/name/nm0000115/?ref_=fn_al_nm_1#credits')
    // Click on the first movie with a Completed tag
    cy.get('input[type="text"]').type('Previous')
    cy.contains('Longlegs').click()
  })
})
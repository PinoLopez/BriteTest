describe('Born today spec', () => 
{
  it('passes', () => 
  {
    cy.visit('https://www.imdb.com/')
    cy.get('.ipc-icon--menu').click()
    cy.contains('Celebs').click()
    cy.contains('Born Today').click()
    cy.get('.imdb-header-search__input').clear()
    cy.contains('Advanced name search').click()
    cy.visit('https://www.imdb.com/search/name/?birth_monthday=07-11&sort=birth_date,desc')
    // Click on the 3rd name in the list and take a screenshot
    cy.contains('3. Lukas Heyer Sweeney').click()
    cy.screenshot('third-celebrity-profile')
  })
})
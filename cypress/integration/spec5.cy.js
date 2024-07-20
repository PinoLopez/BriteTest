describe('Born Today 40 Years Ago', () => 
{
  it('passes', () => 
  {
    cy.visit('https://www.imdb.com')
    cy.get('.ipc-icon--menu').click()
    cy.contains('Celebs').click()
    cy.contains('Born Today').click()
    cy.get('.imdb-header-search__input').clear()
    cy.contains('Advanced name search').click()
    // Calculate the date 40 years ago from today
    const today = new Date();
    const fortyYearsAgo = new Date(today.getFullYear() - 40, today.getMonth(), today.getDate());
    const formattedDate = `${fortyYearsAgo.getFullYear()}-${(fortyYearsAgo.getMonth() + 1).toString().padStart(2, '0')}-${fortyYearsAgo.getDate().toString().padStart(2, '0')}`;
    cy.screenshot('celebrity-details');
  })
})
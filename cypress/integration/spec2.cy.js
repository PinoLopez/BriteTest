describe('Top Box Office spec', () => 
{
  it('passes', () => 
  {
    cy.visit('https://www.imdb.com/')
    cy.get('input[type="text"]').type('Top Box Office')
    cy.get('button[type="submit"]').click()
    cy.get('a[href="/title/tt2797368/?ref_=fn_al_tt_2"]').click()
    const starRating = cy.get('div.ipc-starbar__rating button[aria-label="Rate 5"]');
    cy.get('button[data-testid="submit-rating"]').click()
  })
})
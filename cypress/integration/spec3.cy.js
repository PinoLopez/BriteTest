describe('Breaking Bad spec', () => 
{
  it('passes', () => 
  {
    cy.visit('https://www.imdb.com/')
    cy.get('.ipc-icon--menu').click()
    cy.contains('TV Shows').click()
    cy.contains('Top 250 TV Shows').click()
    cy.contains('Breaking Bad').click()
    cy.contains('Photos').click()
    cy.visit('https://www.imdb.com/title/tt0903747/mediaindex/')
    cy.visit('https://www.imdb.com/title/tt0903747/mediaindex/?relatedNames=nm3718379')
    cy.visit('https://www.imdb.com/title/tt0903747/mediaviewer/rm1590360576/?ref_=ttmi_mi_all_2')
  })
})
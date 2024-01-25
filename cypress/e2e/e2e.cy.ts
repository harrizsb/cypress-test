describe('Login Test', () => {
  it('select file upload', () => {
    cy.visit('/')
    cy.get('input[type="email"]').type('user@user.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('button[type="submit"]').click()

    cy.contains('Drag and drop your files here', { timeout: 4000 }).should('be.visible')

    cy.get('input[type=file]').attachFile(['image1.jpeg', 'image2.jpg'])

    cy.get('#file-list').children().should('have.length', 2)
  })

  it('drag & drop upload', () => {
    cy.visit('/')
    cy.get('input[type="email"]').type('user@user.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('button[type="submit"]').click()

    cy.contains('Drag and drop your files here', { timeout: 4000 }).should('be.visible')

    cy.get('#dropzone').attachFile(['image1.jpeg', 'image2.jpg'], { subjectType: 'drag-n-drop' })

    cy.get('#file-list').children().should('have.length', 2)
  })
})
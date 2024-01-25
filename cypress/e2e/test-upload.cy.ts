describe('File Upload Test', () => {
    it('uploads a file', () => {
        // Visit the file upload page
        cy.visit('https://the-internet.herokuapp.com/upload');
        // Get the file input element and attach a file
        const fileName = 'image.jpeg';
        cy.get('#file-upload').attachFile(fileName);
        // Click the submit button
        cy.get('#file-submit').click();
        // Verify that the upload was successful
        cy.get('#uploaded-files').should('contain', fileName);
    });
});
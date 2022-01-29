describe("login page", () => {
    it("For Incorrect credentials", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/verifyPassword'
        }).as('verifyPassword');
        cy.visit("https://geeksforgeeks-5e259.web.app/Login");
        // cy.get('#loginButton').click();
        cy.get('#emailAddress').type("test@gmail123.com");
        cy.get('#password').type("password");
        cy.get('#primaryButton').click();
        cy.wait('@verifyPassword');
        cy.get('#errorMessage').contains("no user record");
    })
    it("For correct credentials", () => {
        cy.intercept({
            method: "POST",
            pathname: '**/identitytoolkit/v3/relyingparty/verifyPassword'
        }).as('verifyPassword');
        cy.visit("https://geeksforgeeks-5e259.web.app/Login");
        // cy.get('#loginButton').click();
        cy.get('#emailAddress').type("test@gmail.com");
        cy.get('#password').type("123456");
        cy.get('#primaryButton').click();
        cy.wait('@verifyPassword');
        cy.visit("https://geeksforgeeks-5e259.web.app/");
        cy.get('#Profile').click();
        cy.get('#emailAddress').contains('test@gmail.com');
        
    })
    it("reset button", () => {
        cy.visit("https://geeksforgeeks-5e259.web.app/Login");
        const ar =["#emailAddress","#password"];
        ar.forEach(x => cy.get(x).type('testing'));
        cy.get("#secondaryButton").click();
        ar.forEach(x => cy.get(x).should('have.value', ''));
    })
    it("SignUp", () => {
        cy.visit("https://geeksforgeeks-5e259.web.app/Login");
        cy.get('#tertiaryButton').click();
        cy.url().should('include', 'SignUp');
    })
    it("home page button", () => {
        cy.visit("https://geeksforgeeks-5e259.web.app/Login");
        cy.get("#homeButton").click();
        cy.url().should('include', 'HotelsUI');
    })
})
const { cyan } = require("@material-ui/core/colors");
const { verify } = require("crypto");

describe("sign up testing", () => {
    it("home page button", () => {
        cy.visit("https://geeksforgeeks-5e259.web.app/SignUp");
        cy.get("#homeButton").click();
        cy.url().should('include', 'HotelsUI');
    })

    it("reset button", () => {
        cy.visit("https://geeksforgeeks-5e259.web.app/SignUp");
        const ar =["#userName","#emailAddress","#password"];
        ar.forEach(x => cy.get(x).should('have.value', ''));
        ar.forEach(x => cy.get(x).type('testing'));
        cy.get("#secondaryButton").click();
        ar.forEach(x => cy.get(x).should('have.value', ''));
    })
    it("login button", () => {
        cy.visit("https://geeksforgeeks-5e259.web.app/SignUp");
        cy.get("#tertiaryButton").click();
        cy.url().should('include','Login');
        
    })
    it("Already exist email address", () => {
        cy.visit("https://geeksforgeeks-5e259.web.app/SignUp");
        cy.intercept({
            method: "POST",
            pathname: "**/identitytoolkit/v3/relyingparty/signupNewUser"
        }).as("submitApi");
        cy.get("#userName").type('testing');
        cy.get("#emailAddress").type('test@gmail.com');
        cy.get("#password").type('testing');
        cy.get("#primaryButton").click();
        cy.wait("@submitApi");
        cy.get("#errorMessage").contains('already in use');
    })
    it("correct submit",() =>{
        cy.visit("https://geeksforgeeks-5e259.web.app/SignUp");
        cy.intercept({
            method: "POST",
            pathname: "**/identitytoolkit/v3/relyingparty/getAccountInfo"
        }).as("submitApi");
        cy.get("#userName").type('testing');
        cy.get("#emailAddress").type(`test${Date.now()}@gmail.com`);
        cy.get("#password").type('123456');
        cy.get("#primaryButton").click();
        cy.wait("@submitApi");
        // cy.visit("https://geeksforgeeks-5e259.web.app");
        cy.get("#profileButton").click();
        cy.url().should('include','Profile');
    })
})

import LoginPage from "../pageObject/LoginPagePO";
const loginPage = new LoginPage(); 

Cypress.Commands.add('login', () => {
  cy.fixture('example').then((data) => {
    const appUrl = data.App_URL;
    cy.visit(appUrl);
    loginPage.getUsernameInput().should('be.visible').type(data.userName);
    loginPage.getPasswordInput().should('be.visible').type(data.password);
    loginPage.getSignInButton().should('be.visible').click();
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      getFixtures(): Chainable<void>;
    }
  }
}

export {};
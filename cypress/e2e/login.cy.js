import LoginPage from "../pageObject/LoginPagePO";
const loginPage = new LoginPage();
describe('Login Page', () => {
  it('should display the login page', () => {
    cy.fixture('example').then((data) => {
      const appUrl = data.App_URL;
      cy.visit(appUrl);
      cy.url().should('eq', appUrl);
      loginPage.getUsernameInput().should('be.visible').type(data.userName);
      loginPage.getPasswordInput().should('be.visible').type(data.password);
      loginPage.getSignInButton().should('be.visible').click();
    });
  });
});
class LoginPage {

    getUsernameInput() {
      return cy.get('input[placeholder="username"]');
    }
    getPasswordInput() {
      return cy.get('input[placeholder="password"]');
    }
    getSignInButton() { 
      return cy.get('input[value="Sign in"]');
    }
  
   
  }
  
  export default LoginPage;
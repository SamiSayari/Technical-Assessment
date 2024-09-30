import CityOfOriginPO from '../pageObject/CityOfOriginPO';
const cityOfOriginPO = new CityOfOriginPO();
beforeEach(() => {
    cy.login();
});
describe('City of Origin Page', () => { 
    it('should display the city of origin page', () => {
        cy.fixture('example').then((data) => {
            cityOfOriginPO.getEmployeeNameCheckBox(data.employeeName).should('be.visible').click();
            cityOfOriginPO.getViewSelectedDataButton().should('be.visible').click();
            cityOfOriginPO.getSelectItemList().should('be.visible')
                .invoke('text').should('eq', `${data.employeeName} is from ${data.employeeCityOfOrigin}`);
        });
    });
});

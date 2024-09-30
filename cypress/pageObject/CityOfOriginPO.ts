class CityOfOriginPO {
    getViewSelectedDataButton = () => cy.get('button[id="btn"]');
    getEmployeeNameCheckBox = (employeeName: string) => 
        cy.contains('span', employeeName).prev()
    getEmployeeCityOfOrigin = (EmployeeName:string) => cy.get(`span[text="${EmployeeName}"]`).prev();
    getSelectItemList = () => cy.get('div[class="jqx-listitem-element"]').find( 'span');
}
export default CityOfOriginPO;

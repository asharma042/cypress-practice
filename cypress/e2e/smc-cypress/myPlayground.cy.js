/// <reference types="cypress"/>

describe("First Feature ", ()=>{

    // Scenario 1
    it("Login", ()=>{
        const username = "SHARMAAN";
        const password = "4070Sayanu0126!"
        cy.visit('/');
        cy.get('#username').type(username);
        cy.get('#password').type(password)
        cy.intercept("smc-web/retrieveSmcGlobalPreferences*").as(
            "retrieveSmcGlobalPreferences"
          );
          cy.intercept("smc-web/retrieveSmcToolsPreferences*").as(
            "retrieveSmcToolsPreferences"
          );
          cy.intercept("smc-web/getCaseCategorySearchPrefOption*").as(
            "getCaseCategorySearchPrefOption"
          );
          cy.intercept("smc-web/getListOfTextTypes*").as("getListOfTextTypes");
        
          cy.get('.loginContainer').find('input[name="submit"]').click();
        
          cy.wait([
            "@retrieveSmcGlobalPreferences",
            "@retrieveSmcToolsPreferences",
            "@getCaseCategorySearchPrefOption",
            "@getListOfTextTypes",
          ]);

    })

    

})
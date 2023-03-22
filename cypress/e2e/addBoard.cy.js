/// <reference types="Cypress" />
import { loginPage } from "../pageObject/loginPage";
import { addOrganization } from "../pageObject/addOrganization";
import { addBoard } from "../pageObject/addBoard";
import { faker } from "@faker-js/faker";

describe("ADD Board tests ", () => {
    const orgData = {
        orgName: faker.name.firstName(),
    };

    beforeEach("visit the app ", () => {
      cy.visit("/");
      loginPage.login("Miroslav023@gmail.com", "Miroslav023");
      cy.wait(300);
      addOrganization.fillData(orgData.orgName);
        cy.wait(2000)
        addOrganization.okButton.click();
      });
      
      
    it("ADD board",()=>{
        addBoard.fillboardData(orgData.orgName);
        cy.url().should("include", "/boards");
        cy.wait(1000);
        
    })
    it("add new board", () => {
      cy.intercept({
          method: "POST",
          url: Cypress.env("apiUrl") + "/v2/boards"
      }).as("validNewBoard");
      addBoard.fillboardData(orgData.orgName);
      cy.wait("@validNewBoard").then((interception) => {
          console.log(interception);
          expect(interception.response.statusCode).to.be.equal(201);
          expect(interception.response.statusCode).not.to.be.equal(401);
          expect(interception.response.body.id).to.exist;
          
          cy.url().should("contain", "/boards");
      })
  })
   
    
    
      
});
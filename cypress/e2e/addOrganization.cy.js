/// <reference types="Cypress" />
import { loginPage } from "../pageObject/loginPage";
import { addOrganization } from "../pageObject/addOrganization";
import { faker } from "@faker-js/faker";

describe("ADD Organization tests ", () => {
    const orgData = {
        orgName: faker.name.firstName(),
    };

    beforeEach("visit the app ", () => {
      cy.visit("/");
      loginPage.login("Miroslav023@gmail.com", "Miroslav023");
      cy.wait(300)
      cy.url().should("not.include", "/login");
      });
      
      
    it("ADD Organization",()=>{
        addOrganization.fillData(orgData.orgName);
        cy.wait(2000)
        addOrganization.okButton.click()
        cy.url().should("include", "/organizations")
    });
    it("add new organization ", () => {
        cy.intercept({
            method: "POST",  
            url: Cypress.env("apiUrl") + "/v2/organizations" 
        }).as("validNewOrganization");
        addOrganization.fillData(orgData.orgName);
        cy.wait("@validNewOrganization").then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).to.be.equal(201);
            expect(interception.response.statusCode).not.to.be.equal(401);
            })  
    });   
});
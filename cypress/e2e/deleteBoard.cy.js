/// <reference types="Cypress" />
import { loginPage } from "../pageObject/loginPage";
import { addOrganization } from "../pageObject/addOrganization";
import { deleteBoard } from "../pageObject/deleteBoard";
import { addBoard } from "../pageObject/addBoard";
import { faker } from "@faker-js/faker";

beforeEach("visit the app ", () => {
    const orgData = {
        orgName: faker.name.firstName(),
    };
    cy.visit("/");
    loginPage.login("Miroslav023@gmail.com", "Miroslav023");
    cy.wait(300);
    addOrganization.fillData(orgData.orgName);
    cy.wait(2000)
    addOrganization.okButton.click();
    addBoard.fillboardData(orgData.orgName);
    cy.url().should("include", "/boards");
    cy.wait(1000);

    });
    it("delete Board",()=>{    
     deleteBoard.deleteBoardFunction();
     cy.url().should("not.include","https://cypress.vivifyscrum-stage.com/boards")

    });
    
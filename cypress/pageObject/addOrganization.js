class AddOrganization {
    
    get nameInput() {
        return cy.get('input[type="text"]');
    }
  
    get addButton() {
      return cy.get(".vs-c-my-organization__avatar").last();
    }
    get nextButton() {
        return cy.get("button").last();
    }
    get createButton() {
        return cy.get("button").last();
    }
    get okButton() {
        return cy.get("button").last();
    }

  
    
    fillData(name) {
      this.addButton.click();
      this.nameInput.type(name);
      this.nextButton.click();
      this.createButton.click();
    }
  }
  
  export const addOrganization = new AddOrganization();
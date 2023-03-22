class AddBoard {
    
    get boardTitle() {
        return cy.get('input[placeholder="Enter title..."]');
    }
  
    get addButton() {
      return cy.get(".vs-c-btn").last();
    }
    get nextButton() {
        return cy.get("button").last();
    }
    get scrumChack(){
      return cy.get(".vs-c-radio-check").first();
    }
    
    
    
    fillboardData(name) {
      this.addButton.click();
      this.boardTitle.type(name);
      this.nextButton.click();
      this.scrumChack.click();
      this.nextButton.click();
      this.nextButton.click();
      this.nextButton.click();
      this.nextButton.click();
    }
  }
  
  export const addBoard = new AddBoard();
class DeleteBoard {
    
    get listframe(){
        return cy.get(".vs-l-project__menu");
    }
    get confButton(){
        return this.listframe.find("li").last();
    }
    get deletefild(){
        return cy.get(".vs-c-settings-section-form");
    }
    get deleteButton(){
        return this.deletefild.find(".vs-c-btn--warning");
    }
    get submitButton(){
        return cy.get("button").last();
    }
   
    
    deleteBoardFunction() {
      
      this.confButton.click();
      this.deleteButton.click();
      this.submitButton.click();

    }
}
  export const deleteBoard = new DeleteBoard();
/// <reference types="cypress" />

describe("List Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("contains 10 books", () => {
    cy.get('[data-testid="list-item"]').should("have.length", 10)
  })

  it("navigates to single book page", () => {
    cy.get('[data-testid="list-item"] [data-testid="more-info"]')
      .first()
      .click()

    cy.get('[data-testid="related-author"]').should("have.length", 5)
  })

  // test back btn

  // test switching between related books
})

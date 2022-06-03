import React from "react"
import { render, screen } from "@testing-library/react"
import BookList from "./BookList"
import { bookListMock } from "../../__mocks__/mocks"

describe("BookList component", () => {
  it("should exist", () => {
    render(<BookList bookList={[]} />)

    expect(screen.getByTestId("book-list")).toBeInTheDocument()
  })

  it("should contain 3 ListItem components", () => {
    render(<BookList bookList={bookListMock} />)

    expect(screen.getAllByTestId("list-item").length).toBe(3)
  })
})

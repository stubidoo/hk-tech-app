import React from "react"
import { render, screen } from "@testing-library/react"
import ListPage from "./ListPage"
import { bookListMock } from "../../__tests__/mocks"

describe("ListPage", () => {
  it("should exist", () => {
    render(<ListPage bookList={[]} />)

    expect(screen.getByTestId("list-page")).not.toBeNull()
  })

  it("should contain 3 ListItem components", () => {
    render(<ListPage bookList={bookListMock} />)

    expect(screen.getAllByTestId("list-item").length).toBe(3)
  })
})

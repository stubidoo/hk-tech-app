import React from "react"
import { render, screen } from "@testing-library/react"
import ListPage from "./ListPage"

describe("ListPage", () => {
  it("should exist", () => {
    render(<ListPage />)

    expect(screen.getByTestId("list-page")).not.toBeNull()
  })
})

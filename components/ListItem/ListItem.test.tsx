import React from "react"
import { render, screen } from "@testing-library/react"
import ListItem from "./ListItem"

describe("ListItem", () => {
  it("should exist", () => {
    render(
      <ListItem
        bookTitle="Marry Poppins"
        authorName="Hans Schroder"
        coverImage="some-image-path.jpg"
        moreInfo="marry-poppins"
      />
    )

    expect(screen.getByTestId("list-item")).not.toBeNull()
  })

  it("should render props", () => {
    const props = {
      bookTitle: "Marry Poppins",
      authorName: "Hans Schroder",
      coverImage: "some-image-path.jpg",
      moreInfo: "marry-poppins"
    }
    render(
      <ListItem
        bookTitle={props.bookTitle}
        authorName={props.authorName}
        coverImage={props.coverImage}
        moreInfo={props.moreInfo}
      />
    )

    const bookTitleEl = screen.getByText(props.bookTitle)
    const authorNameEl = screen.getByText(props.authorName)
    const coverImageEl = screen.getByTestId("cover-image")
    const moreInfoEl = screen.getByTestId("more-info")

    expect(bookTitleEl).toBeInTheDocument()
    expect(authorNameEl).toBeInTheDocument()

    // check image tag & props
    expect(coverImageEl).toBeInTheDocument()
    expect(coverImageEl.tagName).toBe("IMG")
    expect(coverImageEl.src).toBe("http://localhost/some-image-path.jpg")

    // more info
    expect(moreInfoEl).toBeInTheDocument()
  })
})

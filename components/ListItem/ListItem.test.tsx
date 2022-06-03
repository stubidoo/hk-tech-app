import React from "react"
import { render, screen } from "@testing-library/react"
import ListItem from "./ListItem"

describe("ListItem component", () => {
  const props = {
    bookTitle: "Marry Poppins",
    authorName: "Hans Schroder",
    coverImage: "some-image-path.jpg",
    moreInfo: "marry-poppins"
  }

  beforeEach(() => {
    render(
      <ListItem
        bookTitle={props.bookTitle}
        authorName={props.authorName}
        coverImage={props.coverImage}
        moreInfo={props.moreInfo}
      />
    )
  })

  it("should exist", () => {
    expect(screen.getByTestId("list-item")).toBeInTheDocument()
  })

  describe("elements", () => {
    it("should render title and author", () => {
      const bookTitleEl = screen.getByText(props.bookTitle)
      const authorNameEl = screen.getByText(props.authorName)
      expect(bookTitleEl).toBeInTheDocument()
      expect(authorNameEl).toBeInTheDocument()
    })

    it("should render image tag", () => {
      const coverImageEl: HTMLImageElement = screen.getByTestId("cover-image")
      expect(coverImageEl).toBeInTheDocument()
      expect(coverImageEl.tagName).toBe("IMG")
      expect(coverImageEl.src).toBe(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      )
    })

    it("should more info button", () => {
      const moreInfoEl = screen.getByTestId("more-info")
      expect(moreInfoEl).toBeInTheDocument()
    })
  })
})

import { bookListMock } from "../../__mocks__/mocks"
import { fetchBooks, findRelatedBooks, ENDPOINT } from "./utils"

describe("helpers", () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it("fetchBooks should ", async () => {
    fetch.mockResponseOnce(JSON.stringify({ books: bookListMock }))

    const fetchBooksResponse = await fetchBooks()

    expect(fetchBooksResponse).toEqual({ books: bookListMock })
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it("returns null when exception", async () => {
    fetch.mockReject(() => Promise.reject(null))

    const fetchBooksResponse = await fetchBooks()

    expect(fetchBooksResponse).toEqual(null)
    expect(fetch).toHaveBeenCalledWith(ENDPOINT)
  })

  describe("related books function", () => {
    it("is not null", () => {
      const related = findRelatedBooks("author", bookListMock)
      expect(related).not.toBeNull()
    })

    it("only returns the given author name", () => {
      const related = findRelatedBooks("John Doe", bookListMock)
      expect(related).toStrictEqual([
        {
          id: "872179f2-4de2-4cde-a259-ee470d83d515",
          title: "Eloquent JavaScript, Second Edition",
          author: "John Doe"
        },
        {
          id: "89cae71c-fbe5-445c-8299-6de7a88ea5ab",
          title: "Learning JavaScript Design Patterns",
          author: "John Doe"
        }
      ])
    })
  })
})

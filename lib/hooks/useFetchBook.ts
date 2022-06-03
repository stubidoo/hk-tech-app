import { useEffect, useState } from "react"
import useSWR from "swr"
import { IBook, IRelatedBook } from "types"
import { fetchBooks, findRelatedBooks } from "@/lib/utils/utils"

const PAGE = "http://localhost:3000/BookPage"
export function useFetchBook(id: string) {
  const { data, error } = useSWR(PAGE, fetchBooks)
  const [book, setBook] = useState<IBook | null>()
  const [relatedBooks, setRelatedBooks] = useState<IRelatedBook[] | null>()

  useEffect(() => {
    if (data && id) {
      const bookInfo = getBookAndRelated(id, data.books)
      setBook(bookInfo.book)
      setRelatedBooks(bookInfo.related)
    }
  }, [data, id])

  return {
    book,
    relatedBooks,
    error
  }
}

function getBookAndRelated(id: string, books: IBook[]) {
  const book: IBook | null = getBook(id, books)
  const related = book ? findRelatedBooks(book.author, books) : null

  return {
    book,
    related
  }
}

function getBook(id: string, books: IBook[]): IBook | null {
  const book = books.find((book) => book.id === id)
  return book ? book : null
}

import { IBook } from "types"

export const ENDPOINT =
  "https://hokodo-frontend-interview.netlify.app/data.json"

export async function fetchBooks() {
  try {
    const result = await fetch(ENDPOINT)
    const data = await result.json()
    return data
  } catch (error) {
    return error
  }
}

export function findRelatedBooks(authorName: string, books: IBook[]) {
  const stripTitle = (name: string) =>
    name.replace(/Mr. |Mrs. |Prof. |Dr. /g, "")

  const relatedBooks = books
    .map(({ id, author, title }) => ({
      id,
      title,
      author: stripTitle(author)
    }))
    .filter((book) => book.author === stripTitle(authorName))

  return relatedBooks
}

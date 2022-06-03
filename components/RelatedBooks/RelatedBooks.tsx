import Link from "next/link"
import { RelatedBooksProps } from "types"

function RelatedBooks({ books }: RelatedBooksProps) {
  return (
    <div>
      <h5>Books by same author:</h5>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={{ pathname: "/BookPage", query: { id: book.id } }}>
              <a data-testid="related-author">{book.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedBooks

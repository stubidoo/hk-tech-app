import React from "react"
import ListItem from "@/components/ListItem"
import { IBook, BookListProps } from "types"
import { Container } from "./BookList.style"

function BookList({ bookList }: BookListProps) {
  return (
    <Container data-testid="book-list">
      {bookList.map((book: IBook) => (
        <ListItem
          bookTitle={book.title}
          authorName={book.author}
          coverImage={book.cover}
          moreInfo={book.id}
          key={book.id}
        />
      ))}
    </Container>
  )
}

export default BookList

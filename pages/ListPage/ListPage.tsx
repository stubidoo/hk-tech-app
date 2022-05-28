import React from "react"
import ListItem from "@/components/ListItem"
import { IBook, ListPageProps } from "types"

function ListPage({ bookList }: ListPageProps) {
  return (
    <div data-testid="list-page">
      {bookList.map((book: IBook) => (
        <ListItem
          bookTitle={book.title}
          authorName={book.author}
          coverImage={book.cover}
          moreInfo={book.id}
          key={book.id}
        />
      ))}
    </div>
  )
}

export default ListPage

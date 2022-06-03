import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Container, Book, ImageWrapper } from "./BookPage.style"
import { useFetchBook } from "@/lib/hooks/useFetchBook"
import RelatedBooks from "@/components/RelatedBooks"

const IMAGE_PLACE_HOLDER = "https://picsum.photos/id/238/200/300"

function ListPage() {
  const router = useRouter()
  const { book, relatedBooks, error } = useFetchBook(router.query.id as string)

  if (error) return <div>failed to load</div>
  if (!book) return <div>loading...</div>

  return (
    <Container>
      <Book>
        <div>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
        </div>
        <div>ISBN: {book.isbn}</div>
        <ImageWrapper>
          <Image
            src={IMAGE_PLACE_HOLDER}
            width="200"
            height="300"
            alt="Book title"
            data-testid="full-size-image"
          />
        </ImageWrapper>

        {relatedBooks && <RelatedBooks books={relatedBooks} />}
        <Link href="/">
          <a data-testid="back">Back</a>
        </Link>
      </Book>
    </Container>
  )
}

export default ListPage

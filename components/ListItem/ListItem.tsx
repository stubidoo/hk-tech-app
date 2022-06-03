import Link from "next/link"
import Image from "next/image"
import React from "react"
import { ListItemProps } from "types"
import { Container, ImageWrapper } from "./ListItem.style"

// Lorempixel.com is down
const IMAGE_PLACE_HOLDER = "https://picsum.photos/id/238/150"

function ListItem({
  bookTitle,
  authorName,
  coverImage,
  moreInfo
}: ListItemProps) {
  return (
    <Container data-testid="list-item">
      <h3>{bookTitle}</h3>
      <h5>{authorName}</h5>
      <ImageWrapper>
        <Image
          src={IMAGE_PLACE_HOLDER}
          width="150"
          height="150"
          alt={bookTitle}
          data-testid="cover-image"
        />
      </ImageWrapper>
      <Link href={{ pathname: "/BookPage", query: { id: moreInfo } }}>
        <a data-testid="more-info">More Info</a>
      </Link>
    </Container>
  )
}

export default ListItem

import React from "react"
import { ListItemProps } from "types"

function ListItem({
  bookTitle,
  authorName,
  coverImage,
  moreInfo
}: ListItemProps) {
  return (
    <div data-testid="list-item">
      <h3>{bookTitle}</h3>
      <h5>{authorName}</h5>
      <img src={coverImage} alt={bookTitle} data-testid="cover-image" />
      <button type="button" data-testid="more-info">
        More Info
      </button>
    </div>
  )
}

export default ListItem

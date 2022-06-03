// Components
export type ListItemProps = {
  bookTitle: string
  authorName: string
  coverImage: string
  moreInfo: string
}

export type BookListProps = {
  bookList: IBook[]
}

export type RelatedBooksProps = {
  books: IRelatedBook[]
}

// Interfces
export interface IBook {
  id: string // "872179f2-4de2-4cde-a259-ee470d83d515",
  cover: string // "https://lorempixel.com/640/480/?ee470d83d515",
  isbn: string // "9781593275846",
  title: string // "Eloquent JavaScript, Second Edition",
  subtitle: string // "A Modern Introduction to Programming",
  author: string // "Mrs. John Doe",
  published: string // "2014-12-14T00:00:00.000Z",
  publisher: string // "No Starch Press",
  pages: number // 472,
  description: string // "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: string // "http://eloquentjavascript.net/",
}
export interface IRelatedBook {
  id: string
  title: string
  author: string
}
